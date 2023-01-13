const {
    EmbedBuilder,
    SlashCommandBuilder
} = require("discord.js")
const fetch = require('node-fetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('send a random meme'),
    async execute(interaction, client ) {
        fetch(`https://api.popcat.xyz/meme`)
        .then((res) => res.json())
        .catch({})
        .then(async (json) => {
            const embed = new EmbedBuilder()
            .setTitle(json.title)
            .setURL(json.url)
            .setImage(json.image)
            .setDescription(`Upvotes: ${json.upvotes}\nComments: ${json.comments}`)
            .setColor(client.mainColor)
            .setFooter({
                text: 'Made with love by !Toddy#6505',
                iconURL: 'https://media.discordapp.net/attachments/1049856209546641439/1054751963415318589/blinky.gif'
            })
            .setTimestamp(Date.now())
            await interaction.reply({
                embeds: [embed],
            })
        })
    }
}