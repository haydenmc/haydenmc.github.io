---
title: "Running Frigate on Port 443"
categories: [notes]
---

_**2025-02-16 Edit:** I no longer recommend the approach I outlined below.
It breaks some internal API calls that Frigate makes to itself.
It's best to just use the service as it's officially supported with a reverse proxy._

---

I recently started setting up [Frigate](https://frigate.video/) for my family
to use for security camera recording on a Synology Diskstation NAS.

To make it easy for them to access, I configured the Docker container to run
with a distinct IP address and assigned it a friendly hostname.

Unfortunately, Frigate runs its HTTPS server on port 8917 by default, so the
friendly hostname is marred with an ugly `:8917` at the end.

Frigate recommends mapping this port to `443` with Docker, but since I used the
`macvlan` network driver to give Frigate its own IP, port mapping wasn't
possible.

Instead, I had to mount a modified
[`listen.gotmpl`](https://github.com/blakeblackshear/frigate/blob/dev/docker/main/rootfs/usr/local/nginx/templates/listen.gotmpl)
into the Docker container with the "listen" entries modified to get Nginx to
listen on port 443:

```
volumes:
  ...
  - /volume1/docker/frigate/nginx/listen.gotmpl:/usr/local/nginx/templates/listen.gotmpl:ro
  ...
```

[This article](https://github.com/blakeblackshear/frigate/blob/dev/docs/docs/configuration/advanced.md#network-configuration)
touches on it briefly.
