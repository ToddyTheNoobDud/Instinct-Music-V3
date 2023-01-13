const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Kiss a user lol")

    .addUserOption((option) =>
      option
      .setName("user1")
      .setDescription("the 1st user")
      .setRequired(true)
    )
    .addUserOption((option) =>
      option
      .setName("user2")
      .setDescription("the 2nd user")
      .setRequired(true)
    ),
  async execute(interaction, client) {
    const member = interaction.options.getMember("user1") || interaction.member;

    superagent
      .get("https://nekos.life/api/v2/img/kiss")
      .end((err, response) => {
        const embed = new EmbedBuilder()
          .setTitle(`OMG KISS!111!!1`)
          .setImage(response.body.url)
          .setColor(0x18e1ee)
          .setDescription(`${interaction.user.toString()} kissed ${member.user.toString()}`)
          .setURL(response.body.url);
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

