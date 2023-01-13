const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('membercount')
        .setDescription('Shows the number of members in the server'),
    async execute(interaction, client) {
        const members = await interaction.guild.members.fetch()
        const getMember = members.filter(m => !m.user.bot)
            .sort((a, b) => b.user.createdAt - a.user.createdAt);
        const member = Array.from(getMember.values());
        
        const users = await interaction.guild.members.fetch()
        const getUser = users.filter(m => !m.user.bot)
          .sort((a, b) => a.user.createdAt - b.user.createdAt);
          const user = Array.from(getUser.values());
        const embed = new EmbedBuilder()
            .setColor(0x18e1ee)
            .setTitle('total members, oldest members, newest members')
            .addFields([
                {
                    name: 'member count',
                    value: `**${interaction.guild.memberCount} members**`,
                    inline: true,
                },
                {
                    name: 'oldest member',
                    value: `${user[0].user.toString()}`,
                    inline: true
                },
                {
                    name: 'newest member',
                    value: `${member[0].user.toString()}`,
                    inline: true
                }
            ])
            .setTimestamp(Date.now());
        interaction.reply({
            embeds: [embed],
        })
    }

}