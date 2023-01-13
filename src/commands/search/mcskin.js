const {
    EmbedBuilder,
    SlashCommandBuilder
} = require('discord.js')

    module.exports = {
        data: new SlashCommandBuilder()
        .setName('mcskin')
        .setDescription('See somone minecraft skin.')
        .addStringOption((option) =>
        option
        .setName('username')
        .setDescription('Username of the player')
        .setRequired(true)
        ),
        async execute(interaction, client) {
            const username = interaction.options.getString('username');

            const embed = new EmbedBuilder()
            .setTitle(`Mc avatar for ${username}`)
            .setDescription('Here you go')
            .setImage(`https://minotar.net/armor/body/${username}/700.png`)
            .setColor(0x18e1ee)
            .setTimestamp(Date.now())
            await interaction.reply({
                embeds: [embed]
            })
        }
    }