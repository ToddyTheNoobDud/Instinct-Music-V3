const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('cat_fact')
    .setDescription('send a random cat fact'),
    async execute (interaction, client) {
        fetch(
            `https://some-random-api.ml/facts/cat`
        )
            .then((res) => res.json()).catch({})
            .then(async (json) => {
                const embed = new EmbedBuilder()
                .setTitle('random cat fact')
                .setDescription(json.fact)
                .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1056195487360884736/images.jpg')
                .setColor(0x18e1ee)
                .setFooter({
                    text: `Random cat fact lol`,
                    iconURL: `https://cdn.discordapp.com/attachments/938949514688081971/1056195487360884736/images.jpg`
                })
                .setTimestamp(Date.now())
                await interaction.reply({
                    embeds: [embed],
                })
            })
    }
}
