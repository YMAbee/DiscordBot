const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log('Bot is online!');
});

// Helper function to get a random GIF from a specified folder
const getRandomGif = (folder) => {
    const files = fs.readdirSync(`./${folder}`);
    const gifFiles = files.filter(file => file.endsWith('.gif'));
    const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)];
    return `./${folder}/${randomGif}`;
};

// Event: Message received
client.on('messageCreate', message => {
    console.log(`Message received: "${message.content}" from ${message.author.tag}`);

    if (message.author.bot) return; // Ignore bot messages

    // Commands to trigger specific folders
    if (message.content === '!ribbit') {
        const gifPath = getRandomGif('ribbit');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!bullish') {
        const gifPath = getRandomGif('bullish');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!kick') {
        const gifPath = getRandomGif('kick');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!mute') {
        const gifPath = getRandomGif('mute');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!timeout') {
        const gifPath = getRandomGif('timeout');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!bye') {
        const gifPath = getRandomGif('bye');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!lfg') {
        const gifPath = getRandomGif('lfg');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    } else if (message.content === '!gm') {
        const gifPath = getRandomGif('gm');
        message.channel.send({ files: [gifPath] }).catch(console.error);
    }
});

client.login(process.env.BOT_TOKEN);
