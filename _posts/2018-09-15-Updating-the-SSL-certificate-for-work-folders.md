---
title: "Updating the SSL certificate for work folders (or another IIS app)"
categories: [notes]
---
I always forget this command, so I figured I'd write it down:

```cmd
netsh http add sslcert ipport=0.0.0.0:443 certhash=THUMBPRINT appid={CE66697B-3AA0-49D1-BDBD-A25C8359FD5D} certstorename=MY
```

Where `THUMBPRINT` is the certificate thumbprint you can find from the certificate manager `certlm.msc` tool.

You may need to delete the existing cert if you're updating it:

```cmd
netsh http delete sslcert ipport=0.0.0.0:443
```