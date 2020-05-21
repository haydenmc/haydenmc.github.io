---
title: "Boink: My Attempt to Beautify My Web App Code"
categories: [projects]
---
## My web apps tend to be a mess.

Over the past few years, I've written a number of "single-page apps". [Purdue.io]({% link _projects/2015-Purdue-io.md %}), [Tunr]({% link _projects/2014-Tunr-io.md %}), [Roomie]({% link _projects/2013-Roomie.md %}), etc. As I never bothered to learn any of the hip new client-side SPA frameworks (Angular, Ember, etc), my first step was always to come up with a good way to manage the UI. In my haste to build an awesome app, I never put too much thought into crafting a nice way to manage how I was displaying information, or even architecting the app in the first place.

The result was nightmarish spaghetti code. Extremely short-sighted hunks of code to apply this animation here, update this element here, insert these elements there, etc. Despite this, however, I'd receive praise for how beautiful and smooth the UI was. The code, despite being poorly conceived from a perspective of re-use and modularity, was very efficient at what it did: move elements of the DOM around to display what it needed to the user.

Once others started diving into my code, though, this became a problem. It hit me harder when I dove back into old code of mine and couldn't easily come to understand where I'd need to make changes to add new features. I was lost in my own labyrinth of terrible UI code.

<video src="/assets/images/2014-07-30-tunr-preview.mp4" muted autoplay controls loop></video>

*Tunr promotion video, showcasing some of the cool UI*

## You should use a framework, you idiot.

So how do I solve this problem? Use a framework, of course! I immediately dove into [Google's Polymer project](https://www.polymer-project.org/), which seeks to provide a framework that includes support for web components, data binding, common controls that implement "material design," and all sorts of other stuff. 

It was a nightmare - nothing was easy. Tons of components and conventions that weren't very well documented. There was no support for TypeScript. Helpers were provided in places I didn't feel I needed help (a huge amount of "let me get that for you" CSS styles). In addition, a lot of it only worked well with Chrome. Worst of all, whenever something went horribly wrong, I didn't understand how the framework worked behind the scenes, so I had nowhere to go. It drove me crazy. *Worth noting is that this was over a year ago, things may be much better now.*

After wrestling with Polymer for days, I went back to spaghetti-UI, and productivity shot through the roof. I could bang out simple apps in no-time (the [Purdue.io](http://purdue.io) front-end was the result of one or two night's work), even if the code behind them was hideous. 

## Do it yourself.

I started thinking... what exactly do I need to do to beautify my apps? A way to *declaratively* write UI. A library that will interpret declared UI, and manage keeping it in sync with data, animating it, etc. I would write my own UI framework, and I'd call it [**Boink**](https://github.com/haydenmc/Boink).

Instead of being a giant mess of spaghetti code, what if my app could look like something like this?

    <template id="todo-list">
        <ui-repeater>
            <template>
                <todo-item></todo-item>
            </template>
        </ui-repeater>
    </template>
    
    <template id="todo-item">
        {{itemDate}}: {{itemName}}
    </template>
    
    <todo-list data-context="{{todoItems}}"></todo-list>

Pretty straightforward. Define some templates, define where the data belongs, and Boink does the rest.

So far Boink already supports templating and data binding, and comes with some common components like `Repeater`. As I continue to write more apps with Boink, the framework will expand to support everything I need to do. Navigation model and animations are up next. Maybe when I get to a point where I'm confident Boink is fairly feature complete, I can go back and re-write some of my old projects to utilize it.