---
title: "Finally! A use for the Microsoft Touch Mouse!"
categories: [notes]
---
I bought the Microsoft Touch Mouse awhile back... you know, this one:

<img src="/assets/images/2015-02-01-microsoft-touch-mouse-01.jpg" alt="Microsoft Touch Mouse" />

If you're not familiar with it, it provides a big touch surface on top for gestures. Gestures like swiping your thumb left and right to go back/forward in your web browser, triple finger swipe up or down to zoom in/out, etc.

Here's a demo of the zoom in gesture:

<video src="/assets/images/2015-02-01-touch-mouse-practice.mp4" muted autoplay controls loop></video>

These gestures weren't extraordinarily useful for me... so I tended to just use the Touch Mouse like any old mouse. Until Windows 10 rolled around with virtual desktops. Mac users have been able to swipe back and forth on their trackpads to switch desktops forever, so why not the Touch Mouse?

## It works!

<video src="/assets/images/2015-02-01-touch-mouse-desktops.mp4" muted autoplay controls loop></video>

## Configuring the Touch Mouse for Windows 10 virtual desktops

I decided to use the double finger swipe gesture for desktop changes. A swipe left would move to the lefthand desktop, right to the righthand desktop, and up to bring up task view. Great.

The Microsoft Mouse and Keyboard Center allows you to bind macros to these gestures on the touch mouse, so all we have to do is bind the virtual desktop hot keys to the proper gestures.

These settings are located in the "Touch Settings" section.

![Navigate to Touch Settings](/assets/images/2015-02-01-keyboardcenter_01.png)

Now we just find the gesture we want, and change it to the proper keyboard shortcut (Win + Ctrl + Right/Left arrow key)...

![Set the key combination to Win+Ctrl+Right Arrow](/assets/images/2015-02-01-keyboardcenter_02.png)

Now, for *task view* this becomes a bit tricky... the "key combination" setting won't let you input "Win+Tab" as a key combination. So we need to use a macro instead.

![Set the macro for task view](/assets/images/2015-02-01-keyboardcenter_03.png)

Use the "Insert Special Key" option to insert the Windows Key into the list. You'll have to right click on the Windows Key element inside of the Editor and hit "split", then add a tab key inside the "pressed" and "released" events.

Done! Now you can swipe between desktops like all of your hipster Mac friends!