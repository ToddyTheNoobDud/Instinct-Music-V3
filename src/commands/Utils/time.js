const superagent = require('snekfetch');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('time')
    .setDescription('Show the current time.'),
    async execute(interaction, client) {
        var today = new Date()
const Day = today.toString().split(" ")[0].concat("day");
const Month = today.toString().split(" ")[1]
const Year = today.toString().split(" ")[3]
const embed = new EmbedBuilder()
        .setTitle('Time')
        .setDescription('here you go')
        .addFields([
            {
                name: 'Today is',
                value: `${Day}`,
                inline: true,
            },
            {
                name: 'Month',
                value: `${Month}`,
                inline: false,
            },
            {
                name: 'Year',
                value: `${Year}`,
                inline: false
            }
        ])
        .setColor(0x18e1ee)
        .setTimestamp(Date.now())
        await interaction.reply({
            embeds: [embed],
        })
    }
}