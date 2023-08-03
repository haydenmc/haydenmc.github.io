---
title: "RT2600AC Router Setup Notes"
categories: [notes]
---

There are a few obscure customizations I make to my router over SSH that I'm
documenting here so I can remember how to do them in the future.

## Getting SSH root

The `admin` account needs to be enabled in the router management web portal,
then it can be used over SSH as a root user.

## Enabling multiple IPv6 prefixes via DHCPv6-PD

The post [here](https://community.synology.com/enu/forum/2/post/154473) helped
me figure out how to get my router to request a different IPv6 prefix length
from my ISP, per @jazzyj:

> I found you can edit the /etc/init/dhcp-client6.conf file to include a prefix hint for the DHCPv6-PD setup, line 43:

For me, this was the resulting diff in `/etc/init/dhcp-client6.conf`:

```diff
@@ -40,7 +40,7 @@
                        exec /usr/sbin/dhclient -6 -d -q -pf ${PID_FILE} -lf ${LEASE_FILE} -cf ${CONFIG_FILE} -nw ${IFACE}
                        ;;
                pd-client)
-                       exec /usr/sbin/dhclient -6 -d -q -pf ${PID_FILE} -lf ${LEASE_FILE} -cf ${CONFIG_FILE} -P -N -nw ${IFACE}
+                       exec /usr/sbin/dhclient -6 -d -q -pf ${PID_FILE} -lf ${LEASE_FILE} -cf ${CONFIG_FILE} -P --prefix-len-hint 60 -N -nw ${IFACE}
                        ;;
                *)
                        ;;
```

Now my ISP assigns me 8 IPv6 prefixes I can assign to a bunch of different
subnets.

## Dynamic Porkbun DNS

I have a hacky shell script I run periodically to update DNS records to point
my domain name at my public IP address.

The script itself can be found [here](https://gist.github.com/haydenmc/609c9401b11b9c915801534fc4bd3db5).

I store it in `/volume1/my_scripts` (since apparently it is safe from being
wiped during updates) and add it to `/etc/crontab` as follows:

```crontab
#minute hour    mday    month   wday    who     command
0       */3     *       *       *       root    /volume1/my_scripts/update-hayden-house-ddns.sh
```
