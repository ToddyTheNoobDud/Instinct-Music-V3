const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('google')
       .setDescription('Search on Google')
        .addStringOption((option) =>
            option
            .setName('words')
            .setDescription('Words to search')
            .setRequired(true)
        ),
        async execute (interaction, client) {
            const words = interaction.options.getString('words');
            const link = 'https://www.google.com/search?q=' + encodeURIComponent(words);
            const embed = new EmbedBuilder()
            .setTitle("Found it")
            .setDescription(`**${link}**`)
            .addFields([
              {
                name: "Searched Query",
                value: `**${words}**`,
                inline: true,
              },
            ])
            .setColor(0x18e1ee)
            .setFooter({
              text: `Made with ❤️ by !Toddy#6505`,
              iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
            })
            .setTimestamp(Date.now());
          await interaction.reply({
            embeds: [embed],
          });
        }
}