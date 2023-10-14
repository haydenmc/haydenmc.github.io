---
title: "Creating a Foobar2000 Autoplaylist for Most Recent Music"
categories: [notes]
---

I like to have a running playlist in my preferred music player
([foobar2000](https://www.foobar2000.org/)) to show my entire library sorted
by most recently added music first, since I have a tendency to want to play
the hell out of new songs I find, and also enjoy taking trips through time by
scrolling back to music from earlier eras and reliving memories from that
period of my life.

The best way I've found to do this in foobar2000 is to create a "search
autoplaylist."

To do this, select Library -> Search, then enter the following query:

```
ALL SORT DESCENDING BY %last_modified%
```

Then select the ellipsis '...' and select "Create Autoplaylist"

The result will be a playlist that always shows your entire library sorted by
the last modified date of the files in your library, so new music always
appears on top.
