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
            case '!ping':
                this.message.channel.send('Pong');
                return;

            default:
                return;
            }
        }
        else {
            // Handle cases that are not explicitly commands here.
            if (author.id === '213098512798187521') {
                this.message.channel.send('Dan is speaking');
            }
        }
    }
}

module.exports = MessageProcessor;
