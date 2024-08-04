---
title: "Building My Own RGB LED Light Strands"
categories: [projects]
---

The first home automation project I embarked on was getting multicolor LEDs
strung up around the two large bushes in front of the house.

## The Ugly Ones From Home Depot

I had Christmas lights on them in years past, but they were ugly and low
quality. I figured that addressable, multi-color LEDs would not only look nicer,
but also give me more flexibility on the appearance. Maybe I could even use the
lights to celebrate other non-wintery holidays.

_An ugly attempt at hanging a "not-enough" quantity of cheap Home Depot
Christmas lights:_

![A tiny amount of ugly Christmas lights hanging around two huge buses](/assets/images/projects/2024-home-automation-ugly-christmas-lights.jpg)

## Building Something Better

I did a bit of research and discovered a few products that aimed to offer what
I was looking for, but they all turned out to be pretty expensive and/or locked
to a crappy app or web service provided by the manufacturer.

Meanwhile, a string of basic WS2811 addressable LEDs was fairly cheap in
comparison. I could get a couple thousand of them for under $500, an order of
magnitude cheaper than offerings from companies like Twinkly.

Coupled with an ESP32, a decent 12V power supply, and an open-source LED
controller software called [WLED](https://kno.wled.ge/) I was able to assemble
my own completely addressable LED light strands!

<video src="/assets/images/projects/2024-home-automation-christmas-lights-prototype.mp4" mute controls></video>

I soldered all of the components down onto protoboards, enclosed them in a
weatherproof one-gang boxes from Home Depot, and ran 12V lines out to several
midpoints of the lengthy strand to avoid causing any voltage drop or heat
issues.

![Completed protoboard with all of the electronics components](/assets/images/projects/2024-home-automation-christmas-lights-protoboard.jpg)

![Protoboard and wiring inside of the one-gang box](/assets/images/projects/2024-home-automation-christmas-lights-box.jpg)

Finally, we strung the lights up on the bushes and rejoyced as they looked _way
better_ than the cheap Home Depot lights from before.

<video src="/assets/images/projects/2024-home-automation-christmas-lights-on-tree.mp4" mute controls></video>

I then proceeded to nerd out and define automated light routines for every
holiday of the year.

![Screenshot of giant list of light automations](/assets/images/projects/2024-home-automation-christmas-lights-automations.jpg)
