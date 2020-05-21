---
title: "Microsoft Camera Codec Pack on Windows 10 Technical Preview"
categories: [notes]
---
I recently installed the [Windows 10 Technical Preview](http://preview.windows.com/) (how exciting)! I'm loving the experience so far.

Recently, however, I was importing some photos from a Canon 5D, and noticed Windows wouldn't generate preview images for the RAW CR2 files. The Microsoft Camera Codec Pack is built to resolve this, however, upon opening the installer, it refuses to install due to the version of Windows I'm now running.

After some research, I found that I could modify MSI files with a [tool called Orca](http://www.brentnorris.net/blog/archives/319) from Microsoft. I was then able to remove the OS check from the MSI file and get it installed. Now my CR2 files show previews in Explorer, and are viewable in the Photos app!

I've included the MSI here, just in case you don't want to go through all the work that I did. [Download it here](/assets/images/2014-10-12-MicrosoftCameraCodecPack-x64.msi).