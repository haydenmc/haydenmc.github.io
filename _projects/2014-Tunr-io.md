---
title: Tunr
subtitle: Web Project
date: 2014-01-01
description: Tunr was a cloud music service designed for those who want to keep ownership of their music files.
icon: tunr.svg
---
Tunr.io is a cloud music service meant for people who like to retain ownership of
their own music library.

Users can synchronize their library to the Tunr service and then access it via
the browser app.

<video src="/assets/images/2014-09-15-tunr-artist-images.mp4" muted autoplay loop controls></video>

## Motivation
Subscription music services are on the rise - gone are the days of needing to purchase,
store, and maintain your own library of music files. But what happens when the
subscription service doesn't have a track you like? Or when they stop existing
entirely? What do you do with the collection of music files you've curated over
years?

Tunr.io attempts to fill this gap - providing the conveniences of a subscription
cloud music services, but working with the library of music files that you own.

## Building It
The Tunr back-end is an ASP.NET Web API. It ingests tracks uploaded by the user and
scans their metadata into the user's library. The track data is stored in its original
format in [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

The user's library can be queried via REST APIs, and also downloaded in one large JSON
blob for offline processing.

When playback occurs, the requested track is pulled from Azure Blob Storage and if
necessary is transcoded on-the-fly to fit the bandwidth and codec requirements
of the client. This allows users to store lossless tracks in Tunr, but still enjoy
reasonable playback quality and speed on mobile devices and browsers.

The browser front-end is an entirely custom framework, optimized for speed and fluidity.

## Sources
1. [Tunr.io](https://github.com/Tunr-io/Tunr)
2. [Scratch Repository for Tunr Rewrite](https://github.com/haydenmc/TunrScratch)