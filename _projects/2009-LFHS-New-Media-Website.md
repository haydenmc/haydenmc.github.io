---
title: LFHS New Media Website
subtitle: Web
date: 2009-01-01
dateIsApprox: true
description: In high school I developed a web portal where students in the New Media class could upload and share their projects.
icon: lfhsnewmedia.svg
---

Sophomore year of high school I enrolled in my high school's New Media course.

The New Media program boasted a pretty stellar clase of talented students
working with a passionate instructor to create all sorts of digital media,
mainly video.

To share their media, students often uploaded video to Google Drive or other
file sharing services. Maintaining a curated catalog of student media to share
with the community was a difficult chore.

I created a web app to provide a place for students to upload and share videos
while providing instructors with the tools to control permissions and manage
uploaded content.

The original site looked like this:

![LFHSTele.com original page template before facelift](/assets/images/projects/2009-lfhsnewmedia-original-site.png)

But a year or two later I completed a redesign:

![LFHSNewMedia.com landing page with search sidebar](/assets/images/projects/2009-lfhsnewmedia-landing-search.jpg)

The site was written in the "LAMP" (Linux, Apache, MySQL, PHP) stack that was
fairly popular at the time. It was hosted on Amazon AWS EC2 and leveraged S3
and Cloudfront for storing and serving media. FFmpeg was used to read media
properties and generate thumbnail imagery.

Throughout the next few years it saw regular updates and added functionality.
After over a decade of service it was finally retired in 2022.

## Notable Features

 - Role based access control where students can register by confirming their
   student email, then be placed into the appropriate student permissions role
   by an instructor or teaching assistant.
 - A hierarchical tag system, allowing admins to create a tree of tags with
   permissions for which roles are permitted to upload, manage, or view media
   associated with a given tag.
 - Automatic verification of media files uploaded to ensure they conform to
   format and size/bitrate constraints.
 - Thumbnail and poster generation with custom timecode selection and text
   overlays
 - Embed code generation to allow embedding of videos in other websites.
 - Homepage carousel showing poster previews of videos for tags selected to be
   featured by admins.
 - Browse and search videos by tags and keywords.

The source code is available
[on GitHub](https://github.com/LFHSNewMedia/Legacy-LFHSNewMedia.com).

### Video Metadata Sidebar
![UI used to edit video metadata, including the assigned tags](/assets/images/projects/2009-lfhsnewmedia-tag-editor.jpg)

### Video Poster Editor
![UI used to edit video thumbnails and posters](/assets/images/projects/2009-lfhsnewmedia-poster-editor.jpg)