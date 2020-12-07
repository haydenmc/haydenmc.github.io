---
title: Faster Than Light
subtitle: Native + Web Project
date: 2020-08-07
description: After the Mixer streaming service closed in July of 2020, I worked to create an open-source implementation of their low-latency FTL streaming protocol.
icon: ftl.svg
---
Faster Than Light was a low-latency media streaming protocol developed for use by Microsoft's
Mixer live streaming service. With this protocol users could enjoy very low latency, below 1
second, between streamers and viewers, allowing for unprecedented levels of real-time interactivity.
After the closure of Mixer in July 2020, I decided to build my own implementation of the FTL
protocol.

## Motivation
Shortly after [Mixperiment64]({% link _projects/2020-Mixperiment-64.md %}) came to life, Microsoft
announced that they would be closing the [Mixer](https://en.wikipedia.org/wiki/Mixer_(service))
live streaming service.

Sadly, at the time, Microsoft Mixer was the only big live streaming service capable of true
sub-second latency between streamer and viewer via their **"Faster Than Light"** or **FTL** protocol.
I was bummed, because I had just begun experimenting with live streaming experiences that required
low latency in order to keep the viewer engaged with the interactive experience.

## Building It
Although [the SDK](https://github.com/mixer/ftl-sdk) provided for developing applications to
stream _to_ Mixer via FTL was open source, the server-side implementation was proprietary.

After poking around the client-side SDK, I
[documented my findings]({% link _posts/2020-08-03-Faster-Than-Light-protocol-engineering-notes.md %})
and proceeded to hack together [my own server-side implementation](https://github.com/Glimesh/janus-ftl-plugin)
of FTL as a plugin for [Janus](https://janus.conf.meetecho.com/), a popular WebRTC streaming
framework that Mixer also utilized.

Within a couple weeks I had a promising prototype running with latency comparable to what Mixer
was providing.

<video src="/assets/images/projects/2020-faster-than-light-prototype.mp4" loop mute controls></video>

## What's Next
I'm continuing to work with a group of fine folks to integrate this technology with
[Glimesh.tv](https://glimesh.tv), a new community-driven open-source streaming platform!

### Sources
- [Faster-Than-Light protocol engineering notes]({% link _posts/2020-08-03-Faster-Than-Light-protocol-engineering-notes.md %})
- [FTL Janus Plugin](https://github.com/Glimesh/janus-ftl-plugin)