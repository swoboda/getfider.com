+++
title = "Hosting your own instance"
description = "Up and running in under a minute"
weight = 100
draft = false
toc = true
bref = "A one minute guide on how to get your own Fider instance up and running"
+++

<h3 class="section-head" id="h-basic-template"><a href="#h-basic-template">Prerequisites</a></h3>

<p>We highly recommend using <a href="https://www.docker.com/">Docker</a> to host the application. It's the easiest and fastest way to get started and stay up to date with any future release.</p>

<p>You'll also need a <a href="https://www.postgresql.org/">Postgres 9.6+</a> database, which could also be hosted on Docker, but that's not required.</p>

<h3 class="section-head" id="h-development"><a href="#h-development">Installing and Running</a></h3>

<h5>Step 1: Create a docker compose file</h5>

<p>
Create a file named <code>docker-compose.yml</code> and copy content below. 
Read comments for to know what settings are available. 
</p>

<p>This Docker Compose file defines two services: <code>db</code> and <code>app</code>. In case you're using an external Postgres database, remove <code>db</code> service and replace <code>DATABASE_URL</code> variable with your connection string.</p>

<p>The application service loads the latest stable version from our public <a href="https://hub.docker.com/r/getfider/fider/">Docker repository</a>.</p>

<pre>
version: '2'
services:
  db:
    restart: always
    image: postgres:9.6
    environment:
      POSTGRES_USER: fider
      POSTGRES_PASSWORD: s0m3g00dp4ssw0rd

  app:
    restart: always
    image: getfider/fider:stable
    ports:
      - "9999:8080"
    environment:
      PORT: 8080

      # Use production for best performance or development for more verbose logging
      GO_ENV: production
      
      # The address where the application is listening to
      # Change it according to your DNS settings, eg.: http://feedback.mycompany.com
      AUTH_ENDPOINT: http://localhost:9999
      
      # Connection string to the Postgres database (following example uses Docker defined above)
      DATABASE_URL: postgres://fider:s0m3g00dp4ssw0rd@db:5432/fider?sslmode=disable
      
      # You can generate a new salt here: https://api.wordpress.org/secret-key/1.1/salt/
      JWT_SECRET: Ml_1%vQwv]lchqm5;>y2(xKbU@Q@Lybwb(COx+d.o3&|5>)y;~G[KuWWYvR--6_g
      
      # At least one of the following auth method needs to be enabled

      # Facebook: https://developers.facebook.com/apps/
      # OAUTH_FACEBOOK_APPID: <fb_app_id>
      # OAUTH_FACEBOOK_SECRET: <fb_app_secret>

      # Google: https://console.developers.google.com
      # OAUTH_GOOGLE_CLIENTID: <google_app_id>
      # OAUTH_GOOGLE_SECRET: <google_app_secret>

    depends_on:
      - db
</pre>

<h5>Step 2: Pull the images and run it</h5>

<p>Open your favorite terminal, navigate to the folder in which you create file above and run following command.</p>

<pre>
$ docker-compose pull
$ docker-compose up
</pre>

<p>You might see some messages like <code>Error: dial tcp 172.19.0.2:5432: getsockopt: connection refused</code>. Don't panic, that's expected. That might happen because the application is trying to start while the database is still initializing.</p>

<p>The message <code>http server started on [::]:8080</code> means everything went well and you're ready to go.</p>

<p>Just open your favorite browser and navigate to <a href="http://localhost:9999">http://localhost:9999</a>. You should see a page like the following.</p>

<figure>
    <img src="/images/docs/fider-clean-install.png" />
    <figcaption>Installation page of a clean Fider instance</figcaption>
</figure>

<p>Wondering what <code>No authentication methods enabled</code> means? Continue to <a href="/docs/configuring-oauth">Configuring OAuth</a>.</p>