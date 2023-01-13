const {
    SlashCommandBuilder,
    EmbedBuilder
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bug_report")
    .setDescription("repor a bug to !Toddy#6505")
    .addStringOption((option) =>
    option
    .setName("bug")
    .setDescription('the bug to report')
    .setRequired(true)
    ),
    async execute(interaction, client) {
        const bugs = interaction.options.getString('bug')
        const channel = client.channels.cache.get("1042456262681559121")
        const bugEmbed = new EmbedBuilder()
        .setTitle('bug has been reported!')
        .setDescription('here we go again')
        .addFields([
            {
                name: `reporter`,
                value: `<@!${interaction.member.id}>`,
            },
            {
                name: `bug`,
                value: `${bugs}`
            },
            {
                name: `guild name`,
                value: `${interaction.guild.name}`
            }
        ])
        .setColor(0x18e1ee)
        .setFooter({
            text: `Bug report system`
        })
        .setTimestamp(Date.now());
        channel.send({
            embeds: [bugEmbed],
        })
    }

}