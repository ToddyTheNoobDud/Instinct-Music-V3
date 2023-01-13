const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dictionary")
    .setDescription("search a word")
    .addStringOption((option) =>
      option
      .setName("word")
      .setDescription("the word")
      .setRequired(true)
    ),
  async execute(interaction, client) {
    const words = interaction.options.getString("word") || interaction.member;
    superagent
      .get(`https://some-random-api.ml/dictionary?word=${words}`)
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`definition for ${words}`)
          .setColor(0x18e1ee)
          .setThumbnail('https://media.discordapp.net/attachments/1049856209546641439/1054751963415318589/blinky.gif')
          .setDescription(response.body.definition)
        .setFooter({
            text: `Made with love by !Toddy#6505\nnice word lol`,
            iconURL: `https://media.discordapp.net/attachments/1049856209546641439/1054751963415318589/blinky.gif`
        })
        .setTimestamp(Date.now());
        interaction.reply({
          embeds: [embed],
        });
      });
      return;
    },
    catch (err)
    {
      interaction.reply({
        content: `there was a error`
      })
    }
  }

