const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var isDeleteAlreadyRunning = false;

client.on('message', msg => {
    if (msg.content === '!deleteall') {
        if (isDeleteAlreadyRunning) {
            msg.channel.send("Oops! A delete is already running. Please wait until the previous deletion request has finished.");
        } else {
            isDeleteAlreadyRunning = true;
            msg.channel.send("OK! Deleting all messages in channel...");

            // Channel to delete messages in
            const targetChannel = msg.channel;

            // Show delete progress
            targetChannel.startTyping();

            // Get messages from channel
            targetChannel.fetchMessages({ limit: 100 })
                .then(messages => {
                    console.log(`Received ${messages.size} messages`);
                    messages.forEach(element => {
                        element.delete(20)
                            .then(msg => console.log(`Deleted message: ${msg.content}`))
                            .catch(console.error);
                    });
                })
                .catch(console.error);

            isDeleteAlreadyRunning = false;
            targetChannel.stopTyping();
        }
    }
});

client.login(auth.token);
