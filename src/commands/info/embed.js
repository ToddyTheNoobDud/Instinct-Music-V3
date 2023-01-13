const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('My epic embed!'),
    async execute(interaction, client) {
     const embed = new EmbedBuilder()
        .setTitle(`This is a Discord.js Embed!`)
        .setDescription(`this is a epic description!`)
        .setColor(0x18e1ee)
        .setImage('https://cdn.discordapp.com/attachments/938949514688081971/1050156128006311956/instinct_v2.png')
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://top.gg/bot/895324303732654091`,
            iconURL: `https://cdn.discordapp.com/attachments/938949514688081971/1050156128006311956/instinct_v2.png`,
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL(`https://top.gg/bot/895324303732654091`)
        .addFields([
            {
                name: `hi`,
                value: `idk`,
                inline: true
            },
            {
                name: `Instinct Music`,
                value: `V3`,
                inline: true
            }
        ]);

       await interaction.reply({
        embeds: [embed]
       });
    }
}
