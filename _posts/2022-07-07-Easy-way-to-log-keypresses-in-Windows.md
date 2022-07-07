---
title: "Easy way to log keypresses in Windows"
categories: [notes]
---

At work I was prototyping using some hardware with special buttons that
I wanted to respond to, but I didn't know exactly what key presses those
buttons were simulating.

Instead of resorting to writing my own little key listener tool, I found
a great suggestion in this
[Stackoverflow post](https://superuser.com/a/337960/354553):

> You could use AutoHotkey and KeyboardHook to see what keys are being pressed.
> You only need to create a script with this line
>
> ```
> #InstallKeybdHook
> ```
>
> Save the file with and "ahk" extension and run it. Then in the Systray do a
> right click in the proper icon and select open. In the menu select
> View->History.....press F5 to update. [...]

This worked wonders - I was able to find out that the "special button"
was just sending the keys `Right Alt` + `Left Win` + `F12`! I was even able
to use AutoHotkey to re-bind this sequence to invoke my custom prototype!
