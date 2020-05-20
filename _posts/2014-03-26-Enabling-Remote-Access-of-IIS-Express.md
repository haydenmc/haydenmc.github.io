---
title: Enabling Remote Access of IIS Express
categories: [notes]
---
For some of my web projects, I need to test against other devices (phones, tablets, Xboxes, etc.). By default, IIS Express launched by Visual Studio only allows local access to the running web server. Thankfully, I found this Stackoverflow post that explains how to work around this.

First you have to edit your applicationhost.config file, located in the IISExpress/config in your Documents folder. Change the line for your application from this

    <binding protocol="http" bindingInformation="*:44886:localhost" />

to this

    <binding protocol="http" bindingInformation="*:44886:*" />

Then run the following command to give your account permission to run a server on this URL:

    netsh http add urlacl url=http://*:44886/ user=Everyone

(make sure you run this as an administrator)

Now you should be able to access your IIS instance externally!