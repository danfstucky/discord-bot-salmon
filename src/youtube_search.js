const ytSearch = require('yt-search');

function searchYouTube(message) {
    ytSearch(_parseSearchText(message.content), (err, res) => {
        if (err) {
            return message.channel.send('Sorry, could not retrieve youtube results.');
        }

        const videos = res.videos.slice(0,5);
        let botResponse = '';
        for (let index in videos) {
            botResponse += `**[${parseInt(index) + 1}]** - ${videos[index].title}\n`;
        }
        botResponse += `\n**Choose a number between 1 and ${videos.length}.**`;
        message.channel.send(botResponse);

        // Create a filtered message collector to retrieve user response.
        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter);
        collector.videos = videos;
        collector.once('collect', function(m) {
            message.channel.send(`https://www.youtube.com${this.videos[parseInt(m.content) - 1].url}`);
        });
    });
}

function _parseSearchText(messageContent) {
    return messageContent.substr(messageContent.indexOf(' ') + 1);
}

module.exports = { searchYouTube };
