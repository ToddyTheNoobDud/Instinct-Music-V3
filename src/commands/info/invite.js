const {
    SlashCommandBuilder,
    EmbedBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('Invite the bot'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setColor(client.mainColor)
        .setDescription('you can invite using the link:\n **https://discord.com/api/oauth2/authorize?client_id=1050138724001910794&permissions=8&scope=bot%20applications.commands**\n or you can use the top.gg:\n **https://top.gg/bot/1050138724001910794**')
        .setTimestamp(Date.now())
        await interaction.reply({
            embeds: [embed],
        })
    }
}