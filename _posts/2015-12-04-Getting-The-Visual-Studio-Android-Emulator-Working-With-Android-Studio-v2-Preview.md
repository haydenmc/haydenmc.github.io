---
title: "Getting The Visual Studio Android Emulator Working With Android Studio v2 Preview"
categories: [notes]
---
This was much harder than it should've been.

Visual Studio offers an excellent Android emulator. It runs at native x86 on Microsoft's Hyper-V platform, so it's speedy and plays nice with other Hyper-V VMs and Windows Phone emulators. 

Getting it to work was a bit tricky, though.

## Lollipop VMs Won't Boot

First off, after installing I noticed that Lollipop VMs (API versions 21 and 22) just plain didn't boot. They would just hang at the "OS Starting..." screen until the emulator would finally timeout with an error. Looking at the VM through the Hyper-V console itself would reveal the error `failed to read from /dev/hw_random` which was fairly cryptic.

It was only after searching the web a little bit that I came across [the solution](https://social.msdn.microsoft.com/Forums/en-US/f92bb80e-bf32-42f8-bd2c-2c7b8f9e840b/visual-studio-emulator-for-android-issues?forum=visualstudiogeneral):

    My guess is that the problem is the new generation of processor you are using.
    Apparently the Hyper-V emulator fails while trying to load Android Api 21 or 22 virtual images.

    Workaround:
     - Open Hyper-V Manager
     - Select the Lollipop Emulator Virtual Machine
     - Click Settings
     - Expand "Processor", select "Compatibility"
     - Enable  "Migrate to a physical computer with a different processor version"

After toggling this option, the emulator started very quickly.

## VMs Don't Show Up in ADB
After successfully booting the VMs, I had trouble getting them to show up in ADB so that I could deploy to them. Turns out that the VS Android Emulator looks to a registry key to determine where your Android SDK is installed, as mentioned in the [troubleshooting document](https://msdn.microsoft.com/en-us/library/mt228282.aspx#ADB).


    Navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Android SDK Tools
    Modify the Path registry variable to match the path to your Android SDK.

This key didn't exist on my machine (perhaps it was removed from whatever SDK ships with Android Studio 2 Preview). After adding it and restarting my VM, it showed up in ADB and I was able to deploy to it. Joy!

![Lollipop running in the Visual Studio Android Emulator](/assets/images/2015-12-04-android-emulator.png)