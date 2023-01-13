const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle    } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('returns a button'),
    async execute (interaction, client) {
        const button = new ButtonBuilder()
        .setCustomId(`button`)
        .setLabel('hi')
        .setStyle(ButtonStyle.Primary)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]  
        })
        
    }

}
