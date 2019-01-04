class AuthorCommandProcessor {
    constructor(author, message) {
        this.author = author;
        this.message = message;
    }

    process() {
        if (this.author.id === '213098512798187521') { // Dan ID
            this.message.channel.send('https://media.giphy.com/media/ZCCdpQxAYC8HC/giphy.gif');
        } else if (this.author.id === '213103417973932033') { // Jess ID
            this.message.channel.send('https://media.giphy.com/media/ZCCdpQxAYC8HC/giphy.gif');
        }
    }
}

module.exports = AuthorCommandProcessor;
