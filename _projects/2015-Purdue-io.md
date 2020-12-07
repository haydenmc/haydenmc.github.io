---
title: Purdue.io
subtitle: Web Project
date: 2015-01-01
description: Purdue.io provides a public API to access Purdue University's class scheduling system.
icon: purdue-io.svg
---
[Purdue.io](https://purdue.io){:target="_blank"} was my Senior Design project at Purdue University.

It provides an open API for all of the Purdue University course data, and a few
extra APIs for things like registering an authenticated user for classes.

On top of that it has a pretty nifty demo UI to showcase how easy it is to access
and process class scheduling data.

It's also [open source](https://github.com/Purdue-io/PurdueApi){:target="_blank"},
and I still maintain it today.

![Fancy looking Purdue.io subject listing page](/assets/images/projects/2015-purdue-io.png)

## Motivation

The course scheduling software at Purdue isn't pretty. It is some monstrosity 
called SunGard Luminis, and in typical education software fashion, its experience
is shockingly poor.

![Hideous MyPurdue Course Lookup Page](/assets/images/projects/2015-mypurdue.png)

Every semester students would struggle through MyPurdue, combing through giant
class tables, writing down Class ID numbers (or CRNs) on a sticky note, typing
them all into a big set of input fields, and facepalming over the inevitable
errors they'd be presented with, prompting them to repeat the whole process
several times over.

Ambitious CS students who wanted to improve this experience were faced with a
steep hurdle - Luminis provides no accessible API to allow developers to easily
access course data or manipulate student schedules. If you wanted to access MyPurdue
programmatically, you had to pretend like you were just another student using a
web browser. This is more difficult than it sounds, since Luminis is _very_ particular
about how you handle the cookies and HTTP headers it provides the browser through
its various iframe and javascript-laden pages.

As a CS student who attempted to programmatically access MyPurdue for several
different projects, I decided it was about time to provide a better API. I believe
motivated students could probably do a better job than SunGard when it comes to
designing class scheduling experiences.

## Building It

Purdue.io exists in three parts:
1. CatalogSync program
2. ASP.NET OData API
3. Front-end

### CatalogSync

CatalogSync is a program that runs at a regular interval and scrapes all new class
data from MyPurdue. It populates a relational database with all of the class data so
it's quick and easy for API clients to query.

It also manages filtering all of the
raw class data into distinct entities for terms, courses, classes, sections, instructors,
buildings, classrooms, etc. This makes writing complex queries a whole lot easier,
and you don't have to do any guesswork to determine which lab and recitation sections
belong to the same class.

### ASP.NET OData API

[OData](https://docs.microsoft.com/en-us/odata/overview) (open data protocol) is
a standard protocol for accessing data models via HTTP REST calls. Think of it
like a REST version of SQL.

The [Purdue.io API](https://api.purdue.io/) exposes all of the Purdue course
catalog as OData entities. Consumers can even construct
[advanced queries](https://github.com/Purdue-io/PurdueApi/wiki/OData-Queries)
using `$filter`, `$select`, and more.

The API also provides some 
[authenticated endpoints](https://github.com/Purdue-io/PurdueApi/wiki/Authenticated-Endpoints)
for things like registering for classes.

### Front-End

In order to demonstrate just how Purdue.io could be used to provide better
registration experiences, a  [quick web browser front-end](https://purdue.io) was
hacked together over a couple of days.

## Sources

1. [Purdue.io API](https://github.com/Purdue-io/PurdueApi)
2. [Purdue.io Front-End](https://github.com/Purdue-io/WebApp)