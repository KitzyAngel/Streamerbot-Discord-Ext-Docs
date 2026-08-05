---
title: Getting Started
layout: default
nav_order: 1
---

# Getting Started

## 1. Create a Discord Bot

### Go to [Discord Developer Portal Applications](https://discord.com/developers/applications)
<img src="{{ site.baseurl }}/img/Discord Dev Applications.png" width="700">


Create application for your Bot (The name here is only interal. Name it whatever you want that is fitting)

---

### Go to Bot on the bar on the left
<img src="{{ site.baseurl }}/img/Discord Bot Settings.png" width="700">

Set your bots username<br>
OPTIONAL: Add an image for your bot to show as its avatar on discord

---

### Scroll down to Bot Intents
<img src="{{ site.baseurl }}/img/Discord Bot Intent.png" width="700">

Turn on intents for events you want your bot to be able to listen to. Intents Are:

* Presence Intent: For tracking and seeing the activity of discord users
* Server Members Intent: For seeing and tracking discord user information in your server
* Message Content Intent: For seeing the contents of messages

If unsure, turn them all on to allow your bot to do anything you may want it to

---

### Reset the Bot Token
<img src="{{ site.baseurl }}/img/Discord Bot Token.png" width="700">

Reset the Bot Token and copy & save this for Step 2. (DO NOT share this token with anyone!)

---

### Go to OAuth2 on the left
<img src="{{ site.baseurl }}/img/Discord Bot Permissions.png" width="700">

1. Click Bot under Scopes
2. Select All the permissions you want your bot to have*
3. Copy the generated URL

\* You can change permissions in your server later if you want

---

### Open a new tab
<img src="{{ site.baseurl }}/img/Discord Bot Add To Server.png" width="400">

Paste the generated URL into a new tab and it should open up discord on your PC<br>
Then choose the server you want to add the bot to and authorize with your permissions

---

## 2. Download and import the extension
Download [DiscordBotExt.sb]({{ site.baseurl }}/downloads/DiscordBotExt.sb)

GIF FOR IMPORTING STREAMERBOT

Import DiscordBotExt.sb into StreamerBot

Set Token File from Step 1 in StreamerBot

## 3. Set Bot Intents

Open Code for Discord Bot

Determine Intents Wanted

Put on line of Code seprate by |

## 4. Run Discord Bot

Test discord Bot

Check global variables to see status

Simple Test to make sure its working

OPTIONAL: Have trigger for when boot STREAMERBOT

## 5. Use Extension

Check out [How to Use the extension]({{ site.url }}{% link how_to_use.md %})

Or Look at [Use Cases]({{ site.url }}{% link use_cases.md %})
