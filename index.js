const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(urlRegex);

    if (urls) {
        const targetChannel = message.guild.channels.cache.find(channel => channel.name === '1101910971116687411/1101910971116687414');
        if (targetChannel) {
            targetChannel.send(`URL detected: ${urls.join(', ')}`);
            message.edit(message.content.replace(urlRegex, ''));
        }
    }
});

client.login('');
