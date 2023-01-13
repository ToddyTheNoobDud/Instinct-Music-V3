const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('dog_fact')
    .setDescription('send a random dog fact'),
    async execute (interaction, client) {
        fetch(
            `https://some-random-api.ml/facts/dog`
        )
            .then((res) => res.json()).catch({})
            .then(async (json) => {
                const embed = new EmbedBuilder()
                .setTitle('random dog fact')
                .setDescription(json.fact)
                .setThumbnail('https://cdn.discordapp.com/attachments/919680757813882910/1055211407974604951/IMG_1548.png')
                .setColor(0x18e1ee)
                .setFooter({
                    text: `Random dog fact lol`,
                    iconURL: `https://cdn.discordapp.com/attachments/919680757813882910/1055211407974604951/IMG_1548.png`
                })
                .setTimestamp(Date.now())
                await interaction.reply({
                    embeds: [embed],
                })
            })
    }
}
