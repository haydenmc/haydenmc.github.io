---
title: "Finding process command line in PowerShell"
categories: [notes]
---

Thanks to [this blog post](https://devblogs.microsoft.com/scripting/powertip-use-powershell-to-find-command-line-of-processes/){:target="_blank"}.

Sometimes you want to know what command line arguments were used to start a process.
PowerShell can tell you!

```powershell
gcim win32_process | where { $_.Name -ieq "processname.exe"} | select commandline -ExpandProperty commandline
```

