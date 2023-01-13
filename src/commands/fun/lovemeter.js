const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("lovemeter")
    .setDescription("see somone love meter")
    .addUserOption((option) =>
      option.setName("user1").setDescription("the 1st user").setRequired(true)
    )
    .addUserOption((option) =>
      option.setName("user2").setDescription("the 2nd user").setRequired(true)
    ),
  async execute(interaction, client) {
    const member = interaction.options.getMember("user1");
    const member2 = interaction.options.getMember("user2");

    const result = Math.ceil(Math.random() * 100);
    const embed = new EmbedBuilder()
    .setTitle('love meter')
    .setDescription("here you go")
    .addFields([
        {
            name: '1st user',
            value: `${member.user.toString()}`,
            inline: false
        },
        {
            name: "the 2nd user",
            value: `${member2.user.toString()}`,
            inline: false
        },
        {
            name: "result",
            value: `**result is ${result}%**`,
            inline: false
        }
    ])
    .setColor(0x18e1ee)
    .setFooter({
        text: "bro shipping a lot",
        iconURL: `https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif`
    })
    .setTimestamp(Date.now())
    await interaction.reply({
        embeds: [embed],
    })
  },
};
