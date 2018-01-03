+++
title = "Hosting your own instance"
description = "Up and running in under a minute"
weight = 100
draft = false
toc = true
bref = "A one minute guide on how to get your own Fider instance up and running"
+++

<h3 class="section-head" id="h-prerequisites"><a href="#h-prerequisites">Prerequisites</a></h3>

<p>We highly recommend using <a href="https://www.docker.com/">Docker</a> to host the application. It's the easiest and fastest way to get started and stay up to date with any future release.</p>

<p>You'll also need:</p>

<ul>
<li>
  <b>PostgreSQL 9.6 Database</b>
  <p>This tutorial uses a Docker PostgreSQL image for the sake of simplicity.</p>
</li> 
<li>
  <b>E-mail sender service:</b>
  <p>You can choose to use either a <b>SMTP Server</b> or a <b>Mailgun account</b>.</p>
</li>
</ul>

<h3 class="section-head" id="h-development"><a href="#h-development">Installing and Running</a></h3>

<h5>Step 1: Create a docker compose file</h5>

<p>
Create a file named <code>docker-compose.yml</code> and copy content below. 
Read the comments to know what each settings is used for. 
</p>

<p>The following Docker Compose file defines two services: <code>db</code> and <code>app</code>. In case you're using an external Postgres database, remove <code>db</code> service and replace <code>DATABASE_URL</code> variable with your connection string.</p>

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
      - "9999:3000"
    environment:
      # Use production for best performance or development for more verbose logging
      GO_ENV: production
      
      # Connection string to the PostgreSQL database. 
      # This example uses the Docker service defined above
      DATABASE_URL: postgres://fider:s0m3g00dp4ssw0rd@db:5432/fider?sslmode=disable
      
      # CHANGE THIS! You can generate a strong secret at https://randomkeygen.com/
      JWT_SECRET: tXQhvSMWMS11qZ9euEhE6lf2ferf0FR6RYGd8iMXiTxxXtJ1XDVdTXPaLtV12ZGp
      
      # From which account e-mails will be sent
      NOREPLY_EMAIL: noreply@yourdomain.com

      ###
      # E-MAIL
      #
      # Either MAILGUN_* or SMTP_* is required
      ###

      # MAILGUN_API: key-yourkeygoeshere
      # MAILGUN_DOMAIN: yourdomain.com

      # SMTP_HOST=smtp.yourdomain.com
      # SMTP_PORT=587
      # SMTP_USERNAME=user@yourdomain.com
      # SMTP_PASSWORD=s0m3p4ssw0rd
      
      ###
      # OPTIONAL
      #
      # Following settings are optional
      ###

      # Social OAuth: Read more about http://getfider.com/docs/configuring-oauth/

      # Facebook
      # OAUTH_FACEBOOK_APPID: &lt;fb_app_id&gt;
      # OAUTH_FACEBOOK_SECRET: &lt;fb_app_secret&gt;

      # Google
      # OAUTH_GOOGLE_CLIENTID: &lt;google_app_id&gt;
      # OAUTH_GOOGLE_SECRET: &lt;google_app_secret&gt;

      # GitHub
      # OAUTH_GITHUB_CLIENTID: &lt;github_client_id&gt;
      # OAUTH_GITHUB_SECRET: &lt;github_secret&gt;

    depends_on:
      - db
</pre>

<h5>Step 2: Pull the images and run it</h5>

<p>Open your favorite terminal, navigate to the folder in which you create file above and run following command.</p>

<pre>
$ docker-compose pull
$ docker-compose up
</pre>

<p><i><b>Important!</b></i> If you see messages like <code>Error: dial tcp 172.19.0.2:5432: getsockopt: connection refused</code>. Don't panic, that's expected when using a docker PostgreSQL. That might happen because the application is trying to start while the database is still initializing.</p>

<p>The message <code>http server started on [::]:3000</code> means everything went well and you're ready to go.</p>

<p>Just open your favorite browser and navigate to <a href="http://localhost:9999">http://localhost:9999</a>. You should see a page like the following.</p>

<figure>
    <img src="/images/docs/fider-clean-install.png" />
    <figcaption>Installation page of a clean Fider instance</figcaption>
</figure>