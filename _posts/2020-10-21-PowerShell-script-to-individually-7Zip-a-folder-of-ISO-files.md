---
title: "PowerShell script to individually 7Zip a folder of ISO files"
categories: [notes]
---

I had a folder full of raw disk images I wanted to compress down for storage long-term.
Here's a little PowerShell one-liner to enumerate a folder full of `*.iso` files and squeeze them
down into individual, ultra-compressed LZMA2 7z archives.

```powershell
Get-ChildItem -Filter *.iso | ForEach-Object { & 'C:\Program Files\7-Zip\7z.exe' a -t7z -m0=lzma2 -mx=9 -aoa "$($_.BaseName).7z" $_.Name }
```
