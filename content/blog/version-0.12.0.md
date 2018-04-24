+++
date = "2018-04-29"
title = "Fider 0.12 released with features for privacy and export data"
categories = ["releases"]
description = "In this month’s release of Fider we’ve been working on two highly requested features: Private Site and Export Data"
author = "goenning"
+++

### Introduction

We're super excited about this release! Private site was a highly requested feature that brings a lot of value in some particular situations. This feature open a range of possibilities on how people can leverage Fider on their projects and organizations. 

Aside from that, we're also shipping a built-in option to export all your ideas to a CSV. This can be particularly useful if you want to do some analysis on an external tool like Excel or any of your favorite Business Intelligence tool.

Just like previous release, we're including on this post a list of other activities and changes that have been done.

### #1: Private Site

ADD PICTURE OF A LANDING PAGE FOR PRIVATE SITE

This release adds the "Privacy" menu item under the Site Settings. Administrators can turn on the "Private Site" option. Once turned on, visitors won't be able to see or submit any idea unless the sign in. The registration is also close, which means that only already registered users will be able to sign in.

To allow people to join the site, we've also add the "Invitations" menu item. This page is used to invite people to your site by sending an email with a custom message that you can write directly on the platform. Once the invited person clicks on email link, they'll be registered to your site and will be able to sign in and participate in it.

### #2: Export Data

ADD PICTURE OF CSV FILE Or BUTTON?

### Other Changes on Fider 0.12

REVIEW EVERYTHING HERE

- enhancement: tie up all tables with tenant_id ([#279](https://github.com/getfider/fider/issues/279)) 
- refactoring: removed jQuery ([#171](https://github.com/getfider/fider/issues/171))
- refactoring: react naming convention and folder structure ([#276](https://github.com/getfider/fider/issues/276))
- refactoring: internal changes that requires less SQL queries to run ([#281](https://github.com/getfider/fider/issues/281), [#277](https://github.com/getfider/fider/issues/277), [#280](https://github.com/getfider/fider/issues/280))
- tooling: add Prettier ([#309](https://github.com/getfider/fider/issues/309)) thanks to [@LukeSheard](https://github.com/LukeSheard)
- tooling: update JS & Go dependencies ([#273](https://github.com/getfider/fider/issues/273))
- fix: goroutine Leak ([#286](https://github.com/getfider/fider/issues/286))
- fix: race condition on worker process ([#313](https://github.com/getfider/fider/issues/313))
- docs: Review Fider contributing process, files, templates ([#278](https://github.com/getfider/fider/issues/278))

### What's next?

Help us shape the future of Fider. Visit our [feedback forum](https://feedback.fider.io/) and raise your voice. Tell us what to do next.