+++
title = "How to enable SSL"
description = "Host your instance under the HTTPS protocol"
weight = 0
draft = false
toc = true
bref = "Follow this quick tutorial to know how you can host your instance under the HTTPS protocol"
+++

<h3 class="section-head" id="h-prerequisites"><a href="#h-prerequisites">Prerequisites</a></h3>

In order to configure HTTPS, you'll need a <code>Certificate</code> and the <code>Private Key</code>.

<h3 class="section-head" id="h-how-to"><a href="#h-how-to">How to enable it</a></h3>

These are the two environment variables that have to be set.

1. <b>SSL_CERT</b>: The name of the <code>Certificate</code> file.
2. <b>SSL_CERT_KEY</b>: The name of the <code>Private Key</code> file.

Fider's Docker image expects both file to be available on `/app/etc`. You can copy these files anywhere you want on your server and share them with your Docker container by using [volumes](https://docs.docker.com/storage/volumes/).

E.g.: if both files are on `/home/me/fider`, you can map it to the container with `-v /home/me/fider:/app/etc`.