---
title: Mixperiment64
subtitle: Native + Web Project
date: 2020-05-04
description: Mixperiment64 is a Covid-19 "quarantine project" to allow Mixer live streaming viewers to play N64 games with each other.
icon: mixperiment-64.svg
---
Mixperiment64 was a COVID-19 project I wrote over the course of a few weeks to
allow folks to play N64 with each other over [Microsoft's Mixer](https://mixer.com)
livestreaming service. By browsing to [Mixperiments.com](https://mixperiments.com),
users are able to join a live N64 game and take control of an N64 controller either
using keyboard controls or an attached Gamepad.

<video src="/assets/images/projects/2020-mixperiment64-joining.mp4" loop mute controls></video>


## Motivation
Mixer's main differentiator in the livestreaming space is that it can deliver streams
with ultra-low latency, often below 1 second. This opens up some unique interaction
possibilities since viewers can see the impact of their input very quickly.

I'd been looking at crafting some sort of viewer-controlled live streaming experience
for a good while, but given the timing of COVID-19 in early 2020 and the need for
virtual activities to enjoy with others, the idea of simply sharing N64 emulator
input became attractive.

## Building It
The [Nvidia Jetson](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/)
board proved to be a capable livestreaming device based on my experience using it
for ChickenCam, so I decided to use it as the platform for this project as well.
It's very similar to a Raspberry Pi in that it's a compact ARM64 Linux Platform,
however this unit has a pretty capable GPU built-in for tasks like AI and computer
vision, so it lends itself particularly well for running 3D games and transcoding
video.

### Programmatic Mixer FTL Streaming
The first goal was to get the game actually streaming to Mixer. I could have used
a traditional streaming solution like [Open Broadcaster Software](https://obsproject.com/),
however it has pretty limited ARM64 support, and it's not really built for this sort
of scenario - there's a lot of overhead for the GUI, Scene composition, streamer 
controls, etc. It's meant to be interacted with by a person managing the live stream.

Instead, I found [this great talk](https://gstconf.ubicast.tv/videos/gstreamer-and-the-faster-than-light-ftl-streaming-protocol/)
by Francisco Javier Velazquez-Garcia who had worked to develop a plugin for GStreamer
to broadcast to Mixer via the low-latency FTL protocol. I was able to pull
[his patch](https://gist.github.com/haydenmc/63638f5bdc3eac73e659e976c6efd029)
and build the library locally, enabling me to easily use the GStreamer API to manage
a live video stream to Mixer programmatically.

### Low-Latency Input from Browser
From there it was just a question of getting input back from the viewers. Getting
game-quality low-latency input over the network from a browser is a challenge myself
and [many others](https://new.gafferongames.com/post/why_cant_i_send_udp_packets_from_a_browser/)
have encountered before - the APIs exposed to you via Javascript largely rely on TCP
for transmitting data, which means additional latency for packet ordering, replaying
of lost packets, etc.

Recently, however, [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
has become a supported standard for things like peer-to-peer video conferencing via
the browser. WebRTC is built with the peer-to-peer audio/video conferencing scenario
in mind, but there does exist a way to send raw data over a WebRTC transport -
it's just notoriously difficult. As luck would have it, someone has done the hard
work of providing a library to harness this transport to send raw data: 
[WebUDP](https://github.com/seemk/WebUdp).

Using WebUDP, I created a little Node web service to manage a queue of players, assign
players to contollers, and receive input from players using keyboard bindings or
[Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) bindings.

### Injecting Input to Emulator
To get the player input back into the actual N64 emulation I wrote my own Input Plugin
for Mupen64Plus. It does little more than listen on loopback interfaces for incoming
controller packets.

### Sources
- [ftlsink for GStreamer](https://gist.github.com/haydenmc/63638f5bdc3eac73e659e976c6efd029):
  This plugin for GStreamer allows streaming to Mixer via the low-latency FTL protocol.
- [Mixperiment64Service](https://github.com/haydenmc/Mixperiment64Service):
  Manages emulation, streaming, and the Node web service.
- [NodeN64Input](https://github.com/haydenmc/NodeN64Input): The web app that allows
  players to request control of an N64 controller, and forwards inputs to the emulator.
- [mupen64plus-input-udp](https://github.com/haydenmc/mupen64plus-input-udp):
  The Mupen64Plus input plugin that simply listens to loopback packets and injects
  them as controller input.