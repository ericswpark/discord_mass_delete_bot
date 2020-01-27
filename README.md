# Discord Mass Delete Bot

Bot to delete messages in given channel

## Usage

 - Obtain a bot API key and a client ID key
 - Go to the following URL to add to your server (change the `YOUR-CLIENT-ID-HERE` part): https://discordapp.com/oauth2/authorize?&client_id=YOUR-CLIENT-ID-HERE&scope=bot&permissions=8
 - Put your bot API key in the `auth.json` file in the following format:

```
{
    "token": "YOUR-BOT-API-KEY-HERE"
}
```

 - Install dependencies and start the app:

```
npm install
npm start
```

 - Tell the bot to nuke everything with `!deleteall` and watch the messages disappear! The typing indicator comes on to show that the bot is working.
 - If the bot is done the typing indicator for the bot should go away. Repeat, as the bot can only do 100 messages (for now).

## To-do

 - Check timestamp and delete messages older than X days
 - Delete more than 100 messages at once
 - Less permissions would be better :/
 - Properly support OAuth so that users don't have to add the bot like in the usage above
 - Make the bot asynchronous so that it can work in more than one channel at a time
