const {
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("deleterole")
    .setDescription("delete a role")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("the role to delete")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
  async execute(interaction, client) {
    
    try {
        const role = interaction.options.getRole("role");
    if (!role) {
      return interaction.reply({
        content: `not valid role`,
        ephemeral: true,
      });
    }
    await role.delete(role.id);
    const embed = new EmbedBuilder()
      .setTitle("role deteletd")
      .setDescription(`(@${role.name.toString()}) has been deleted`)
      .setColor(client.mainColor)
      .setTimestamp(Date.now())
      .setFooter({
        text: `rip ${role.name.toString()}`,
      })
      .setThumbnail(
        `https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif`
      );
    await interaction.reply({
      embeds: [embed],
    });
    }
    catch (err) {
        console.log(err);
        interaction.reply({
            content: `there was an error`
        })
    }
  }
};
