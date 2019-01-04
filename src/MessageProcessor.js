const AuthorCommand = require('./AuthorCommandProcessor');
const  search = require('./youtube_search');

class MessageProcessor {
    constructor(message, bot) {
        this.message = message;
        this.bot = bot;
    }

    process() {
        let author = this.message.author;
        if (author.id === this.bot.user.id) { return; }

        // Bot will listen for messages that start with `!`
        let command = this.message.content.split(' ')[0];
        if (command.substring(0, 1) === '!') {
            switch(command) {
            case '!help': {
                this.message.channel.send(`**Salmon Bot Commands:**
                    !help     - Display a list of commands.
                    !flipcoin - Flip a coin.
                    !roll     - Roll a dice (1 - 100).
                    !rps      - Play Rock/Paper/Scissors with the bot.
                    !youtube  - Search youtube. Ex: !youtube Linkin Park
                    !xkcd     - Post a random xkcd comic.
                    !doge     - Obviously required.
                    !nani     - You are already dead.`
                );
                return;
            }
            case '!flipcoin': {
                let result = ['heads', 'tails'][Math.floor(Math.random()*2)];
                this.message.channel.send(result);
                return;
            }
            case '!nani': {
                this.message.channel.send('https://gfycat.com/abledelayedheterodontosaurus');
                return;
            }
            case '!doge': {
                const gifs = ['http://gph.is/1cm1Pj5', 'http://gph.is/1bcjxR8',
                    'http://gph.is/1nQGqSa', 'http://gph.is/1hdjBG5',
                    'http://gph.is/1aIdyoP', 'https://gph.is/NYk8QO',
                    'https://gfycat.com/cavernousidealibadanmalimbe'];
                let gif = gifs[Math.floor(Math.random()*gifs.length)];
                this.message.channel.send(gif);
                return;
            }
            case '!xkcd': {
                let comicNumber = Math.floor(Math.random()*2094);
                this.message.channel.send(`https://xkcd.com/${comicNumber}/`);
                return;
            }
            case '!roll': {
                this.message.channel.send(Math.floor(Math.random()*100));
                return;
            }
            case '!rps': {
                let choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
                this.message.channel.send(choice);
                return;
            }
            case '!youtube': {
                search.searchYouTube(this.message);
                return;
            }
            default:
                return;
            }
        }
        else {
            // Handle cases that are not explicitly commands here.
            new AuthorCommand(author, this.message).process();
        }
    }
}

module.exports = MessageProcessor;
