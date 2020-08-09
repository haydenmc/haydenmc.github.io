---
title: "Faster Than Light protocol engineering notes"
categories: [notes]
---

Updated: 2020 August 3

Here's a set of notes I'm compiling about Mixer's FTL protocol in order to attempt
building a self-hosted version.

# Overview

[FTL or "Faster Than Light"](https://watchbeam.zendesk.com/hc/en-us/articles/209659623-FTL-Faster-than-Light-streaming-protocol-)
is the proprietary protocol developed for Microsoft Mixer in order to reduce the latency of
streaming media between the origin
(often a streamer using [OBS](https://github.com/obsproject/obs-studio))
and the viewer (often using a web browser).

Using the FTL protocol on the Mixer platform, streamers could often achieve sub-second
stream latency.

This is in contrast to services like Twitch.tv, which when operating in "low latency" mode
only achieve about 3-5 seconds of latency.

## What Impacts Latency

Traditional streaming services like Twitch.tv utilize
[RTMP](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) for ingest (receiving stream
data from streamers), and [HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) for viewing
streams in the browser.

[RTMP or "Real-Time Messaging Protocol"](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
was a protocol developed by Macromedia for Flash Player in the mid-2000s, and was the popular
choice for live streaming content between flash-based software.
[Justin.tv](https://en.wikipedia.org/wiki/Justin.tv) utilized this technology before it was
rebranded to Twitch.

[HLS or "HTTP Live Streaming"](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
was a protocol developed by Apple in the late 2000s for streaming live media over HTTP,
which makes it particularly suitable for browser viewers. 

While the latency for both RTMP and HLS protocols is low enough that it can be considered
"live", it is high enough (multiple seconds) that most would not consider it real-time or
interactive. This can have implications when viewers are expected to interact with the stream
in a time sensitive way such as chatting with stream personalities, or interacting with the
streaming experience/game.

There are a few main culprits that introduce latency into the RTMP/HLS pipeline.

### TCP vs UDP Transport

Both RTMP and HLS utilize [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
as the underlying transport for their data packets.

This protocol is convenient for its mechanisms to ensure that data packets arrive properly
and in the proper order. Packets that are lost on their way from the server to the client are
re-transmitted, and additional data is provided to assemble the packets in the same order that
they were transmitted.

However, these additional mechanisms introduce overhead that makes it unsuitable for applications
where latency is critical. In multiplayer games, for example, a constant stream of positional
data may be sent from the server to clients, and it is undesirable to re-transmit lost position
packets because by the time they arrive, a new position has already been transmitted.

FTL uses the [RTP protocol](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol)
(not to be confused with RTMP) for transmitting media. RTP utilizes a
[UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) transport which does not have
the same overhead as TCP.

### HLS Chunking

The [HLS protocol](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) works by dividing the
stream into chunks that are downloaded over HTTP by the browser and stitched together to form
a continuous stream. The process of chunking introduces latency overhead.

_Note: There are extensions to HLS that promise lower latency, however these are not yet broadly supported_

### FTL: RTP + WebRTC

FTL manages to reduce latency by means of utilizing the RTP protocol for ingest, and the WebRTC
protocol for transmission to viewers. Both RTP and WebRTC are real-time, UDP-based transports,
allowing the "bits" to take a more direct route from streamer to viewer with reduced overhead
at both the transport layer (no TCP overhead) and protocol layer (no HLS chunking overhead).

The consequence of this approach is that FTL is more susceptible to interference from conditions
like network jitter.

# The FTL Protocol

The server-side implementation of Mixer's FTL protocol is proprietary and closed-source as of
this writing. However, the [client SDK](https://github.com/mixer/ftl-sdk/) is open source,
so implementing a custom FTL server that is compatible is possible without much fuss.

## How FTL Works

The FTL protocol operates across two socket connections.

The first is the control connection which is established over a TCP socket.
On this connection, details are exchanged for authentication and A/V metadata. 

The second is the media connection which is established over a UDP socket.
On this connection, audio and video packets are sent to be processed for streaming.
This connection operates in a very similar way to the
[RTP protocol](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol).

### FTL Ingest Control Protocol

#### Streaming Token

Before connecting, the client is provided with a "streaming token" in the following format:

```
123456789-aBcDeFgHiJkLmNoPqRsTuVwXyZ123456
```

This streaming token is of two parts separated by a hyphen. The first part is the "channel ID,"
and the second is the HMAC key used for authentication. 

#### Connection and Handshake

_TODO: There is an optional auto ingest mechanism for selecting the best ingest server for the user's location, this should be documented._

The FTL ingest protocol is a simple ASCII-based TCP protocol. 

To connect, the client simply options a TCP socket to the ingest server and sends the following
payload

```
HMAC\r\n\r\n
```

_Note that requests sent from the client are usually a command string terminated by the sequence `\r\n\r\n`._

The server will then respond with the following

```
200 HMAC_HEX_STRING\n
```

Where `200` is the status code (similar to HTTP status codes - defined in
[ftl_private.h](https://github.com/mixer/ftl-sdk/blob/master/libftl/ftl_private.h#L365))
and `HMAC_HEX_STRING` is an ASCII string of hex bytes representing the payload that is to be
used for HMAC authentication.

The FTL client will parse the hex string into a binary blob that it will then hash with the
shared key that is contained in the second part of the streaming token, which it will send
back to the server in the `CONNECT` command.

The `CONNECT` command is sent from the client with the channel_id and hashed HMAC value.

```
CONNECT 123456789 $HASHED_HMAC_PAYLOAD
```

_Note that the `HASHED_HMAC_PAYLOAD` is preceded by a `$` character._

The server will verify that the `HASHED_HMAC_PAYLOAD` matches the value it has calculated,
and if successful will respond with

```
200\n
```

Now the client will send a series of key/value pairs describing various stream metadata,
in the format

```
KEY: VALUE\r\n\r\n
```

See below for a table of supported key/value pairs.

The server will store these values to use for the media stream.

Once all key/value pairs have been transmitted, the client will send the following

```
.\r\n\r\n
```

This will signal the server to process all of the transmitted data and prepare for media ingest.
It will reply with the following message

```
200. Use UDP port 8004\n
```

Where `8004` is the UDP port on the current ingest server the client should send its UDP packets to.

#### Handshake Summary

| Client Request | Server Response | Parameters |
| :--------------| :-------------- | :--------- |
| `HMAC\r\n\r\n` | `200 %s\n` | `%s`: HMAC payload in hex string format. |
| `CONNECT %d $%s\r\n\r\n` | `200\n` | `%d`: Channel ID from the stream token. <br /> `%s`: The HMAC hashed value of the HMAC payload from the previous response. |
| `ProtocolVersion: %d.%d\r\n\r\n` | n/a | `%d`: Major Version (0) <br /> `%d`: Minor Version (9). |
| `VendorName: %s\r\n\r\n` | n/a | `%s`: Vendor name (ex. "OBS Studio"). |
| `VendorVersion: %s\r\n\r\n` | n/a | `%s`: Vendor version (ex. "25.0.8"). |
| `Video: %s\r\n\r\n` | n/a | `%s`: String `true` or `false` on whether this stream has video. |
| `VideoCodec: %s\r\n\r\n` | n/a | `%s`: String on which video codec is used, "VP8" or "H264". |
| `VideoHeight: %d\r\n\r\n` | n/a | `%d`: Height of video stream (ex. 720). |
| `VideoWidth: %d\r\n\r\n` | n/a | `%d`: Width of video stream (ex. 1280). |
| `VideoPayloadType: %d\r\n\r\n` | n/a | `%d`: Currently a constant value (96). |
| `VideoIngestSSRC: %d\r\n\r\n` | n/a | `%d`: RTP video synchronization source. Currently set to `channelId + 1`, where `channelId` is the channel ID from the streaming token. |
| `Audio: %s\r\n\r\n` | n/a | `%s`: String `true` or `false` on whether this stream has audio. |
| `AudioCodec: %s\r\n\r\n` | n/a | `%s`: String on which audio codec is used, "OPUS" or "AAC". |
| `AudioPayloadType: %d\r\n\r\n` | n/a | `%d`: Currently a constant value (97). |
| `AudioIngestSSRC: %d\r\n\r\n` | n/a | `%d`: RTP audio synchronization source. Currently set to `channelId`, where `channelId` is the channel ID from the streaming token. |
| `.\r\n\r\n` | `200. Use UDP port %d\n` | `%d`: UDP port to connect to for media stream. | 

#### Ping Requests

The FTL client SDK will send a ping request to the service every 5 seconds and will expect a response, otherwise it will time out and disconnect.

| Client Request | Server Response | Parameters |
| :--------------| :-------------- | :--------- |
| `PING\r\n\r\n` | `201\n` | N/A |

### FTL Media Protocol

Once the handshake has been completed over the control connection as outlined above, the client can begin sending media data to the service in the form of RTP packets transmitted via UDP to the port specified by the control connection above.

The protocol used for the media connection is very, very similar to the RTP protocol, with a couple small but key differences. See the RTP RFC [here](https://tools.ietf.org/html/rfc3550#section-3).

In essence, RTP specifies a packet format with a standard header that is transmitted at the beginning of each packet followed by the payload data. The standard header describes the context and type of the payload data that follows. For details on the header, see [section 5.1 in the RTP RFC](https://tools.ietf.org/html/rfc3550#section-5.1).

Of the parameters defined in the RTP header, there is a `payload type` field meant to indicate the type of payload that follows the RTP header data. The RTP spec [forbids](https://tools.ietf.org/html/rfc3550#section-5.2) multiplexing media of different types in the same stream, recommending a unique port for each stream. FTL ignores this requirement, and sends both audio and video on the same port, distinguishing them by the `payload type` header field (`96` for video, `97` for audio).

FTL supports video in VP8 and H264 formats (as negotiated in the control handshake), and audio in Opus format.

#### RTCP Packets

_Under construction_

#### Security Considerations

_TODO: Talk about how to avoid attacks on the media connection..._
