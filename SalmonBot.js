require('dotenv').load();
const Discord = require('discord.js');
const logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {colorize: true});
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client();
const discordAuth = process.env.TEST_BOT_TOKEN;
const MessageProcessor = require('./src/MessageProcessor');

bot.on('ready', () => {
    logger.info(`Connected. Status: ${bot.status}`);
    logger.info(`Logged in as: ${bot.user}`);
});

bot.on('message', message => {
    let botResponseService = new MessageProcessor(message, bot);
    botResponseService.process();
});

bot.login(discordAuth);
