---
title: Some Things I Noticed in Windows Phone 8.1
categories: [ramblings]
---
Windows Phone 8.1 was recently made available for Developers. The set of changes it includes are staggering, some of the most notable being the Cortana assistant, Action Center, 'Shape Writing' (okay, it's Swype) keyboard, and so much more.

One of the more interesting parts from a developer perspective is the new convergence with the Windows Runtime. Whereas Windows Phone 8 used the Silverlight runtime to power its app experiences, Windows 8 apps made use of an entirely separate platform, WinRT (or Windows Runtime). Now Windows Phone developers are free to use the universal WinRT platform, and maintain a level of compatibility with Windows, and in the future, the Xbox. 

Silverlight is still an option, but it's expected that WinRT will become the preferred development platform in the future due to its universal nature. Silverlight is likely still provided purely for backwards compatibility and familiarity. 

As a developer (albiet a fairly new one to the Microsoft world), I dove right in to see what was new, and start developing. A note; having a universal framework for apps on all platforms is all sorts of awesome. The development story at Microsoft is just getting better and better and better. Unfortunately, though, my first experiences with WinRT coming from Silverlight were a bit irksome. Perhaps this is something that's just missing the polish that comes with age. 

Here are some of the first things I noticed that bothered me a tad. A lot of these complaints are merely coming from a UI design perspective - I **love** Windows Phone for the focus it puts on a fast, fluid, and *authentically digital* user interface. This is something I think has stemmed from Zune, the first majorly Metro device from Microsoft, and carried itself through from Windows Phone 7 beyond.

(Fair warning: if your browser doesn't support HTML5 video (or H264) you won't be able to see the video demos below. Sorry about that.)

**Here's the old Panorama control** from Windows Phone 8. One of my favorites! In my opinion, this control is part of what makes up the identity of Windows Phone. The easy-access portal to at-a-glance information. Look at how beautiful and responsive it is without even showcasing any real data!

<video src="/assets/images/2014-04-24-windowsphone81-panorama-02-na.mp4" controls loop autoplay></video>

**And here's the new "Hub" control** meant to replace the Panorama for Windows Phone 8.1. 

<video src="/assets/images/2014-04-24-windowsphone81-panorama-01-na.mp4" controls loop autoplay></video>

Notice anything different (besides the lack of color and smaller font)? The way the title slides across when panning across to the beginning... zero easing with an abrubt stop, not following the movement of the rest of the content at all. You'll also notice that at certain points the control **stops responding to touch entirely** until I lift my finger and touch again. Why?!

Now, in fairness, this only seems to happen when crossing the border from the end of the Hub to the beginning. But still... why did this control become so much worse?

Here's another thing I noticed throughout the rest of the phone. The Tilt effect has gone weird! Yet another favorite of mine from the Windows Phone UI - elements that can be interacted with "tilt" when tapped in three dimensions, appearing to actually be pushed into the screen by the user.

**Check out this tilt effect demo from a classic Silverlight app.**

<video src="/assets/images/2014-04-24-windowsphone81-tilt-01-na.mp4" controls loop autoplay></video>

**Now check out the tilting in the new Cortana app.**

<video src="/assets/images/2014-04-24-windowsphone81-tilt-02-na.mp4" controls loop autoplay></video>

Why is it so weird? The behavior is inconsistent, and ugly if you pay close attention.

There are other things I've noticed about WP8.1 that lack some of the polish I've come to expect from the OS. Things like the notification bar just instantly appearing at the top of the screen when you pull down instead of animating into the viewport. 
Parts of the screen instantly turning white instead of smoothly transitioning when moving from the list to the message detail in the mail app. 
The OS 'pausing' for a second before initiating the page transition animation when hitting the search key or backing out of a twitter status update in People (isn't the whole point of the transition animation to distract the user while you're loading?). 
Requiring a splash screen for the first launch of all apps... this is something that's always bothered me. Why put an additional barrier between the user and their app? Apps should be light enough to load in the time it takes to play the transition animation anyway (see the original people, calendar, mail, etc.) and if they can't, I'm sure they'll gladly include their own loading screen. I'm guessing this is yet another requirement from WinRT.

There are some other things that I'm still [unable to find solutions to](http://stackoverflow.com/questions/23227150/auto-scrolling-a-listview-in-wp8-1-results-in-a-refresh-animation) as well. Things like automatically scrolling a ListView. It took me a day to figure out how to get a reference in code to a list that's in the default Hub template. This never happened to me when I was beginning with the old Silverlight framework. 

Once again, this is all part of a broader effort by Microsoft to merge the development stories into one Universal WinRT - and perhaps these are just bumps in the road. But Windows Phone has always had a shining user experience, and I'd hate to see this new framework undermine the polish and attention to detail that makes the OS so unique.

I <3 Windows Phone.