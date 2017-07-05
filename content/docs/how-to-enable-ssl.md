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

<h3 class="section-head" id="h-basic-template"><a href="#h-basic-template">How to enable it</a></h3>

Fider v0.3.0 shipped with two new environment variables that you'll need to set.

1. <b>SSL_CERT</b>: This is the path to the <code>Certificate</code> file.
2. <b>SSL_CERT_KEY</b>: This is the path to the <code>Private Key</code> file.

If you're using Docker, these files won't be inside the container, but Fider will need to have access to it. In order to accomplish this, we recommend the use of <a href="https://docs.docker.com/engine/tutorials/dockervolumes/">data volumes</a>.