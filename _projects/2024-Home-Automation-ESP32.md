---
title: Home Automation
subtitle: Electronics
date: 2024-03-01
description: Like many others, I've discovered that the ESP32 chip is great for a ton of different IoT and automation projects.
icon: home-automation.svg
---

Around 2023 I finally got myself into home automation projects.

Though I was later to arrive on the scene than many of my nerdy friends, I
quickly found myself digging into the weeds and building custom hardware to
automate things around the house.

_Here's how my ugly Home Assistant dashboard looks today:_

![Screenshot of my Home Assistant dashboard](/assets/images/projects/2024-home-assistant-dashboard.jpg)

# Christmas Lights

I built my own automated, addressable LED light strands to hang up around the
bushes in front of my house.
[Here's a post about it]({% link _posts/2024-01-02-Building-My-Own-RGB-LED-Light-Strands.md %}).

![Protoboard with LED components and enclosure](/assets/images/projects/2024-home-automation-christmas-lights-protoboard-and-box.webp)

<video src="/assets/images/projects/2024-home-automation-christmas-lights-on-tree.mp4" mute controls></video>

# Office Whiteboard Lights

I made a similar set-up to illuminate the border around the glass whiteboard in
my office. Paired with an [LD2410 sensor](https://hlktech.net/index.php?id=988)
it can also detect when I'm in my office even when I'm sitting still at my desk
and turn the lights on/off accordingly.

![Whiteboard with LED-lit purple border](/assets/images/projects/2024-home-automation-whiteboard-lights.jpg)

# Automated Air Conditioners

Seattle having a historically mild climate, our house is not equipped with
central air conditioning. But we do have a few standalone AC units for the few
weeks where the heat becomes unbearable.

I managed to probe around inside of a couple of these AC units and install an
ESP32 to act as a remote control.

![Protoboard with LED components and enclosure](/assets/images/projects/2024-home-automation-air-conditioner.webp)

_Here's a demo of setting the temperature of the air conditioner via Home
Assistant:_

<video src="/assets/images/projects/2024-home-automation-air-conditioner-demo.mp4" controls></video>

# Automated Plant Watering

_TODO_