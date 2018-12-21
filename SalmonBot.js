require('dotenv').load();
const Discord = require('discord.js');
const logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {colorize: true});
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client();
const discordAuth = process.env.DISCORD_TOKEN;

bot.on('ready', () => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', message => {
    let author = message.author;
    if (author.id === bot.user.id) { return; }

    // Bot will listen for messages that start with `!`
    let command = message.content.split(' ')[0];
    if (command.substring(0, 1) === '!') {
        switch(command) {
            case '!ping':
                message.channel.send('Pong');
                return;
         }
     }
});

bot.login(discordAuth);
