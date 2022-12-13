---
title: Windows Devices
company: Microsoft
team: Windows Devices
role: Software Engineer
start_year: 2017
end_year: 2022
description: Working on operating system components for cutting edge new Surface device form-factors.
icon: windows-devices.svg
---

After a year or so of being a PM on the [Interact Next Team]({% link _work/2016-Interact-PM.md %}),
the organization started to invest more resources in productizing some of the incubation concepts
that the Interact Next team had previously been exploring. I decided that I wanted to be more
involved with building these products as an engineer, so I switched roles from Program Manager
to Software Engineer.

Our team worked on a new operating system called 
[Windows 10X](https://blogs.windows.com/windowsexperience/2019/10/02/introducing-windows-10x-enabling-dual-screen-pcs-in-2020/),
with a focus on support for dual screen devices.

Windows 10X is a complete re-imagining of Windows built to run on a wide variety of new devices
and form factors. Someone even managed to get one of the preview images
[running on a MacBook](https://twitter.com/imbushuo/status/1227829002875785216/photo/1){:target="_blank"}!

# Surface Neo

[Surface Neo](https://www.microsoft.com/en-us/surface/devices/surface-neo){:target="_blank"}
was to be one of the first devices to ship with Windows 10X. 

![Surface Neo](/assets/images/work/2017-devices-surface-neo.jpg)

> A groundbreaking new dual-screen device that redefines how you get things done.
> With two 9” screens, a revolutionary 360° hinge, touch, pen, keyboard, and incredible
> new Windows experiences, Surface Neo enables you to do more, anywhere.

Most of my work revolved around tailoring Windows 10X to Surface Neo's unique form-factor.

If you look _very closely_ during the announce demo of the Surface Neo, you can see
my name in the demo device's email inbox!

![My name on the demo device!](/assets/images/work/2017-devices-neo-announce-easter-egg.jpg)

## Postures

Surface Neo is a dual screen device, with two panels joined by a 360-degree hinge.
This form factor allows for a lot of flexibility with how the device and its panels
are oriented with respect to each other and the user.

![Various Surface Neo postures](/assets/images/work/2017-devices-postures.png)

You could hold the device like a book with the two panels side-by-side, you could
set the device on a table like a laptop with one panel above the other, you could even
fold one of the panels all the way back and only use a single panel like a phone.

The team worked to determine a common set of supported orientations, which we called
"postures".

From there we worked to develop the software to interpret dual accelerometer sensor
data into discrete postures, and updated the display and shell code to adapt itself 
appropriately.

## Wonder Bar
Surface Neo had a trick up its sleeve with a keyboard accessory that magnetized to the bottom
screen of the device, turning it into a laptop-style productivity machine.

![Wonder Bar on the Surface Neo](/assets/images/work/2017-devices-wonder-bar.jpg)

When the keyboard is placed on the bottom screen, the device enters Wonder Bar mode,
utilizing the space above the keyboard to present input accelerators (emoji, GIF, auto suggestions),
and also allowing applications to project their windows into the WonderBar via the
[CompactOverlay API](https://docs.microsoft.com/en-us/uwp/api/windows.ui.viewmanagement.applicationviewmode).

If the keyboard is shifted to the top portion of the bottom screen, a trackpad appears below
the keyboard to assist with precision pointing.

![Wonder Bar on the Surface Neo](/assets/images/work/2017-devices-touchpad.jpg)

Our team built the Wonder Bar and Touchpad experiences, and designed systems to interpret keyboard
docking sensor input to respond appropriately when the user positions the keyboard on-screen.