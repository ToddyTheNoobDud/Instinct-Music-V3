const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('bird_fact')
    .setDescription('send a random bird fact'),
    async execute (interaction, client) {
        fetch(
            `https://some-random-api.ml/facts/bird`
        )
            .then((res) => res.json()).catch({})
            .then(async (json) => {
                const embed = new EmbedBuilder()
                .setTitle('random bird fact')
                .setDescription(json.fact)
                .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1056194091945300018/indice.jpg')
                .setColor(0x18e1ee)
                .setFooter({
                    text: `Random bird fact lol`,
                    iconURL: `https://cdn.discordapp.com/attachments/938949514688081971/1056194091945300018/indice.jpg`
                })
                .setTimestamp(Date.now())
                await interaction.reply({
                    embeds: [embed],
                })
            })
    }
}
