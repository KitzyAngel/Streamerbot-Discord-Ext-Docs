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

### Import into streamer bot
<img src="{{ site.baseurl }}/img/StreamerDiscordBot Import.gif" width="700">

Download [DiscordBotExt.sb]({{ site.baseurl }}/downloads/DiscordBotExt.sb) and import it into streamerbot

---

### Create Token File
<img src="{{ site.baseurl }}/img/Create Token File.png" width="700">
Create a new text file with the token from step 1 as the only thing in it

---

### Set the Token File in streamerbot
<img src="{{ site.baseurl }}/img/Streamerbot Token File.png" width="700">

Set the Token File in the Discord Bot Action

---

## 3. Set Bot Intents (OPTIONAL)

### Go to Intents in code
<img src="{{ site.baseurl }}/img/Open Code.png" width="700">

Open Code for Discord Bot<br>
Go to line 39

---

### Change Intents to the ones you want
<img src="{{ site.baseurl }}/img/Edit Intents.png" width="700">

Change the intents to the ones you want seperated by |<br>
Documation on Intents can be found <a href="https://docs.discord.com/developers/events/gateway#list-of-intents" target="_blank">here</a><br>
Then save and close the code

---

## 4. Run Discord Bot

### Test the Bot
<img src="{{ site.baseurl }}/img/Start Bot.png" width="700">

Start the discord bot by running the test trigger


### Check the Bot
<img src="{{ site.baseurl }}/img/Bot Status.png" width="700">

Check global non-persisted global variables for the status of the Bot


### OPTIONAL: Set bot to start with streamerbot
<img src="{{ site.baseurl }}/img/Add Start Trigger.png" width="700">

Add trigger to bot to start with streamerbot or other case you want the bot to start at


## 5. Use Extension

Check out [How to Use the extension]({{ site.url }}{% link how_to_use.md %})

Or Look at [Use Cases]({{ site.url }}{% link use_cases.md %})
