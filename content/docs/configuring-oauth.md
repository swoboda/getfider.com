+++
title = "Configuring OAuth"
description = "Enable one click sign in"
weight = 0
draft = false
toc = true
bref = "Learn how to create Facebook and Google sign in apps and use it in your Fider instance"
+++

Authentication is a key component of Fider platform. We take security and usability very seriously, which is why we've decided to go with Social sign in as the main authentication method.

Setup is very easy and fast.

<h3>Facebook</h3>

<ol>
  <li>Create a facebook app at <a href="https://developers.facebook.com/apps">https://developers.facebook.com/apps</a>.
  <li>Set <code>OAUTH_FACEBOOK_APPID</code> and <code>OAUTH_FACEBOOK_SECRET</code> environment variables.</li>
</ol>

<h3>Google</h3>

<ol>
  <li>Create a facebook app at <a href="https://console.developers.google.com">https://console.developers.google.com</a>.
  <li>Callback URL for Google apps is <code>http://&lt;yoursite.com&gt;/oauth/google/callback</code>. Note that it can be either <code>http</code> or <code>https</code>, that depends on your setup.
  <li>Set <code>OAUTH_GOOGLE_CLIENTID</code> and <code>OAUTH_GOOGLE_SECRET</code> environment variables.</li>
</ol>

<h3>GitHub</h3>

<ol>
  <li>Create a facebook app at <a href="https://github.com/settings/applications/new">https://github.com/settings/applications/new</a>.
  <li>Callback URL for GitHub apps is <code>http://&lt;yoursite.com&gt;/oauth/github/callback</code>. Note that it can be either <code>http</code> or <code>https</code>, that depends on your setup.
  <li>Set <code>OAUTH_GITHUB_CLIENTID</code> and <code>OAUTH_GITHUB_SECRET</code> environment variables.</li>
</ol>

