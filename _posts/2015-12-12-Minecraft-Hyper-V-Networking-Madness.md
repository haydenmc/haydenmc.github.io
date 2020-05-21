---
title: "Minecraft Hyper-V Networking Madness"
categories: [notes]
---
Some notes to myself on a recent adventure trying to get Minecraft running in a Windows Server Core virtual machine inside of Hyper-V. I'll refine this post later.

1. You can download JRE Server to avoid installation headaches.
2. You have to disable TCP offloading, otherwise connections will drop all the time. Set `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TCPIP\Parameters\DisableTaskOffload` to `1`. (https://msdn.microsoft.com/en-us/library/windows/hardware/ff571012(v=vs.85).aspx