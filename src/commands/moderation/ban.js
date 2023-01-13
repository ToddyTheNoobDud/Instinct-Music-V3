const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user from the server")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Select the user to Ban")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("The reason for the Ban")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction, client) {
    const user = interaction.options.getUser("user");
    let reason = interaction.options.getString("reason");
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) reason = "No reason lol";

    if (!interaction.member.permissions.has("BanMembers"));
    if (!interaction.guild.members.me.permissions.has('BanMembers'))
 {
    
      return interaction.reply({
        content: ` i don't have permissions.`,
        ephemeral: false,
      })
    }

    if (user.id === interaction.guild.ownerId)
      return interaction.reply({
        content: "i cant ban the owner bro",
        ephemeral: false,
      });

    if (user.id === interaction.member.id)
      return interaction.reply({
        content: "You cannot ban yourself.",
        ephemeral: false,
      });

    if (user.id === interaction.client.user.id)
      return interaction.reply({
        content: "I cant ban myself.",
        ephemeral: false,
      });

    member
      .ban({
        days: 1,
        reason: reason,
      })
      .catch(console.error);
    const embed = new EmbedBuilder()
      .setTitle(`Banned!`)
      .setDescription(
        `${member.user.tag} has been banned by ${interaction.user.toString()}`
      )
      .setColor(0x18e1ee)
      .addFields([
        {
          name: "reason",
          value: `${reason}`,
        },
      ])
      .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1052925362306302062/kick.gif')
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
   }
  }
