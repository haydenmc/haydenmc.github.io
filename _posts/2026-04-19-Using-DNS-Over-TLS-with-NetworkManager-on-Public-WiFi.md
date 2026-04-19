---
title: "Using DNS-over-TLS with NetworkManager and resolved on Public Wi-Fi"
categories: [notes]
---

I recently ran into some struggles trying to make sure my laptop was using my preferred
DNS provider (Quad9) using DNS-over-TLS when I was on some coffee shop Wi-Fi.

I run Fedora 43 KDE, which uses NetworkManager for connection management and resolved
for DNS.

Here is my imperfect but preferred approach:

## 1. Set up my preferred provider with resolved:

`/etc/systemd/resolved.conf.d/quad9.conf`:

```
[Resolve]
DNS=9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net 2620:fe::fe#dns.quad9.net 2620:fe::9#dns.quad9.net
DNSOverTLS=true
Domains=~.
```

## 2. Tell NetworkManager to push DNS to resolved

(I believe it already does this in Fedora, but I like to be explicit):

`/etc/NetworkManager/conf.d/dns.conf`:

```
[main]
dns=systemd-resolved
```

## 3. Restart NetworkManager / resolved:

```sh
sudo systemctl restart NetworkManager systemd-resolved
```

## 4. Set current connection profile to prefer our default DNS instead of the one advertised by DHCP:

```sh
sudo nmcli connection modify "CONNECTION NAME" ipv4.ignore-auto-dns yes ipv6.ignore-auto-dns yes
```

While this means you have to manually adjust each new connection to use the preferred DNS, the
reality is that lots of public Wi-Fi uses a captive portal, so you'd be stuck manually mucking
with DNS on the first connection anyway.

There's probably a better way to do this, but this has worked for me!