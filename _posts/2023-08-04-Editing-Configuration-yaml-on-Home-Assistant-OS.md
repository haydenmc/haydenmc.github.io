---
title: "Editing configuration.yaml on Home Assistant OS"
categories: [notes]
---

I've recently started messing around with Home Automation, part of that has
involved setting up an instance of Home Assistant - I opted to use the
[ready-to-run VM image](https://www.home-assistant.io/installation/windows)
that they provide for Hyper-V.

While set-up was easy, getting into the guts of the VM isn't, as you're
presented with a "HA CLI" as your interface into the machine instead of a
typical *nix style shell.

Two things that I've learned that I need to note for myself in the future:

To get shell access at the HA CLI prompt in the Home Assistant OS, you must
run the command `login` which will drop you into a root shell.

The relevant configuration files for Home Assistant are located in
`/mnt/data/supervisor/homeassistant`.

Thanks to [this thread](https://community.home-assistant.io/t/how-to-get-access-at-damn-host-system/96549)
for helping me figure this out (and sharing in my frustration).
