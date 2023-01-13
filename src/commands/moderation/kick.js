  const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
      .setName("kick")
      .setDescription("kick a user from the server")
      .addUserOption((option) =>
        option
          .setName("user")
          .setDescription("Select the user to kick")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option.setName("reason").setDescription("The reason for the kick")
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    async execute(interaction, client) {
      const user = interaction.options.getUser("user");
      let reason = interaction.options.getString("reason");
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);

      if (!reason) reason = "No reason lol";

      if (!interaction.member.permissions.has("KickMembers"));
      if (!interaction.guild.members.me.permissions.has('KickMembers')) {
      
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

        member.kick(reason)
        .catch(console.error);

      const embed = new EmbedBuilder()
        .setTitle(`Kicked!!`)
        .setDescription(
          `${member.user.tag} has been kicked by ${interaction.user.toString()}`
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