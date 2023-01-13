const {
EmbedBuilder,
SlashCommandBuilder
} = require('discord.js')
const superagent = require('snekfetch')
const link = 'https://some-random-api.ml/img/cat'

module.exports = {
    data: new SlashCommandBuilder()
    .setName("random_cat")
    .setDescription('random cat image'),
    async execute(interaction, client) {
        superagent
        .get(link)
        .end(async (err, response) => {
            const embed = new EmbedBuilder()
            .setTitle('random cat')
            .setDescription('a random cat image generated from API')
            .setImage(response.body.link)
            .setColor(0x18e1ee)
            .setFooter({
                text: `random cat lol`,
                iconURL: `https://cdn.discordapp.com/attachments/938949514688081971/1059481215868076152/cat-dance.gif`
            })
            .setTimestamp(Date.now())
            .setURL(response.body.link)
            await interaction.reply({
                embeds: [embed]
            })
        })
    }
}