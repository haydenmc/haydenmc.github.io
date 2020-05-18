---
title: Running The Android Emulator Alongside Hyper-V
layout: post
categories: [notes]
---
Today whilst trying to debug one of my sites on Android, I discovered that the Android emulator running in x86 mode with HAXM won't cooperate with Hyper-V. The workaround, unfortunately, is to temporarily disable Hyper-V. This can be done with a simple command run as administrator

    bcdedit /set hypervisorlaunchtype off

To re-enable Hyper-V, run a similar command:

    bcdedit /set hypervisorlaunchtype auto

Note, you have to reboot for these changes to take effect!