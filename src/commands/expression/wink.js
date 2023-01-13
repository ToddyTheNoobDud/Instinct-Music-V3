const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wink")
    .setDescription("wink for a user lol")
    .addUserOption((option) =>
      option
      .setName("user")
      .setDescription("the user")
      .setRequired(true)
    ),
  async execute(interaction, client) {
    const member = interaction.options.getMember("user") || interaction.member;
    superagent
      .get("https://some-random-api.ml/animu/wink")
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`wink`)
          .setImage(response.body.link)
          .setColor(0x18e1ee)
          .setDescription(`${interaction.user.toString()} winked for ${member.user.toString()}`)
          .setURL(response.body.link);
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

