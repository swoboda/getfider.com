+++
title = "Hosting an instance on Heroku"
description = "Deploy your Fider public instance for free"
category = "Self-Hosted"
bref = "A five minutes guide to deploy a Fider instance on Heroku"
+++

<h3>Prerequisites</h3>
<ul>
<li>
  <b><a href="https://www.heroku.com/" target="_blank">A Heroku account</a></b>
  <p>It's totally free to sign up, and will allow you to deploy your application for free on a small instance.</p>
</li>
</ul>

<h3>Deploying your instance</h3>

<h5>Step 1: Create a new heroku app</h5>

<p>
Click the upper left button to create a new application. You will be prompted for an app name, you can choose anything
you want. You also need to choose the hosting region, choose the one closest to you or your users. 
</p>

<figure>
    <img src="/images/docs/heroku-create-new-app.png" />
    <figcaption>Creating a new app on Heroku</figcaption>
</figure>

<h5>Step 2: add a database to the application</h5>

<p>
Under the <b>Resources</b> tab, in the <b>Add-ons</b> section, search and add the <b>Heroku Postgres</b> add-on to 
provide a database for your instance. When prompted for the Plan Name, you can leave the default <b>Hobby Dev - Free</b> 
selected and click <b>Provision</b>.
</p>

<figure>
    <img src="/images/docs/heroku-postgres-add-on.png" />
    <figcaption>Provisioning the Postgresql database</figcaption>
</figure>

<h5>Step 3: add buildpacks</h5>

<p>
Buildpacks are Heroku's scripts that are run when an app is deployed, they are used to "build" your app, usually install 
dependencies and compile code. For Fider you need two buildpacks: go and nodejs. Under the <b>Settings</b> tab, in the 
<b>Buildpacks</b> section, click on <b>Add buildpack</b>, click on the <b>go</b> button and then on <b>Save changes</b> 
on the dialog.
</p>

<figure>
    <img src="/images/docs/heroku-go-buildpack.png" />
    <figcaption>Adding the Go buildpack</figcaption>
</figure>

<p>
 Repeat the operation with the <b>nodejs</b> buildpack. You should now have two buildpacks listed in this section.
</p>

<h5>Step 4: configure application</h5>

<p>
In the <b>Config Vars</b> section of the <b>Settings</b> tab, click on <b>Reveal Config Vars</b> to display the current 
environment variables set on your application. You should already have one <code>DATABASE_URL</code> variable set. 
Don't touch it, it was automatically set by Heroku when you provisioned your database. You need to add some values 
for the Fider instance to work properly:
</p>

<ul>
<li>
  <code>JWT_SECRET</code>
  <p>It's a secret key used for authentication tokens, you can generate a good secret using an online tool like 
  <a href="https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx">this one</a> (take at least
  1024-bit for security).</p>
</li>
<li>
  <code>EMAIL_NOREPLY</code>
  <p>Set this variable to a no-reply address associated to your instance.</p>
</li>
<li>
  <code>EMAIL_MAILGUN_API</code>
  <p>Your Mailgun API key.</p>
</li>
<li>
  <code>EMAIL_MAILGUN_DOMAIN</code>
  <p>Set this variable to your Mailgun domain.</p>
</li>
<li>
  <code>EMAIL_MAILGUN_REGION</code>
  <p>Set this variable to your Mailgun region.</p>
</li>
</ul>

<figure>
    <img src="/images/docs/heroku-env-variables.png" />
    <figcaption>Application environment variables.</figcaption>
</figure>

<p><i><b>If you're using plain SMTP to send emails</b></i>, you need to replace <code>MAILGUN_*</code> variables by the equivalent SMTP 
variables: <code>EMAIL_SMTP_HOST</code>, <code>EMAIL_SMTP_PORT</code>, <code>EMAIL_SMTP_USERNAME</code>, 
<code>EMAIL_SMTP_PASSWORD</code>.</p>


<h5>Step 5: deploy your application</h5>

<p>
The easiest way to deploy your application to Heroku is to connect your application to a github repository. 
Fork the <a href="">Fider official repository</a> and connect this fork to your Heroku application under the 
<b>Deploy</b> tab in the <b>Deployment method</b>.
</p> 

<figure>
    <img src="/images/docs/heroku-github-connection.png" />
    <figcaption>Connecting your Github repository for deployment.</figcaption>
</figure>

<p>
You can now deploy your application by clicking on the <b>Deploy Branch</b> button. Once your app is deployed 
successfully, you can access the app online by clicking the <b>View</b> button.
</p> 

<figure>
    <img src="/images/docs/heroku-app-deployment.png" />
    <figcaption>Successfull deployment of your application.</figcaption>
</figure>

<p>That's it! You should see the signup screen to create your Administrator account, and you can enjoy your free
Fider instance and share it with your users.</p>
