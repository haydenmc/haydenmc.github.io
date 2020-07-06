---
title: "Updating SSL cert for Windows RDP server"
categories: [notes]
---
If you have a signed SSL certificate from a trusted authority, you can use it
to prevent Windows from popping that annoying "this connection isn't trusted"
dialog when RDPing into the box with the cert's hostname. Thanks to
[this post](https://serverfault.com/questions/444286/configure-custom-ssl-certificate-for-rdp-on-windows-server-2012-and-later-in-r){:target="_blank"}
on StackOverflow.

```cmd
wmic /namespace:\\root\cimv2\TerminalServices PATH Win32_TSGeneralSetting Set SSLCertificateSHA1Hash="THUMBPRINT"
```

Where `THUMBPRINT` is the certificate thumbprint you can find from the certificate manager `certlm.msc` tool.