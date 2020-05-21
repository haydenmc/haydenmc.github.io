---
title: "Tunr Update: Tilt effect, album art, and large libraries"
categories: [projects]
---
I've started working for the summer. I've also started my summer classes. But nothing can stop me from working on Tunr!

Some great progress has been made as of late. I've started writing a simple sync client to keep your library in-sync with the Tunr cloud. Right now it's only one-way; new music is uploaded to Tunr, but tracks on Tunr that don't exist on your local PC won't be downloaded. This will change - eventually the Tunr sync client will sync two-way, and make sure your library is up to date everywhere.

Here's a quick demo of where things are right now:

<video src="/assets/images/2014-06-01-tunr-album-art.mp4" muted autoplay controls loop></video>

As you can see, my music library has grown - this is my entire library in the Tunr cloud. I have about 6,000 songs. The UI is still perfectly responsive, which is one of Tunr's core priorities.

Another thing you might notice is the click feedback when you select an item in the library pane. Notice how the item tilts in the direction it's being pressed - this is a user interaction metaphor inspired by Windows Phone. It makes for a rather polished look. I'm going to continue to work on it to make it even more smooth.

The last thing you'll see is the addition of album art. Currently the art is pulled from the Last.FM API, although I am considering using the Xbox Music API, as the images there tend to be of higher quality. Eventually these images and additional song data will be used to generate a background for the Now Playing pane.

There's still much to be done, but Tunr is reaching a point where it's usable as my daily music player, and that's certainly exciting!