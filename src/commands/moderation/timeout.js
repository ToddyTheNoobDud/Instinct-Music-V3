const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeouts a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Select the user to timeout")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("time")
       .setDescription("OBS: you can put 1 To 1000 (all are minutes)")
       .setRequired(true)

    )

    .addStringOption((option) =>
    option
     .setName("reason")
     .setDescription("reason for the timeout")
     .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction, client) {
    const user = interaction.options.getUser("user");
    const time = interaction.options.getString("time");
    let reason = interaction.options.getString("reason");
    const member = await interaction.guild.members
      
    .fetch(user.id)
      .catch(console.error);

    if (!reason) reason = "No reason lol";

    if (!interaction.member.permissions.has("ManageGuild"));
    if (!interaction.guild.members.me.permissions.has('ManageGuild'))
    
      return interaction.reply({
        content: ` i don't have permissions.`,
        ephemeral: false,
      });

    if (user.id === interaction.guild.ownerId)
      return interaction.reply({
        content: "i cant timeout the owner bro",
        ephemeral: false,
      });

    if (user.id === interaction.member.id)
      return interaction.reply({
        content: "You cannot timeout yourself.",
        ephemeral: false,
      });

    if (user.id === interaction.client.user.id)
      return interaction.reply({
        content: "I cant timeout myself.",
        ephemeral: false,
      });



     member.timeout(time * 60 * 1000, reason)
    .catch(console.error);
   
    const embed = new EmbedBuilder()
      .setTitle(`Timed Out!`)
      .setDescription(`${member.user.tag} has been timeout by ${interaction.user.toString()}`)
      .setColor(0x18e1ee)
      .setTimestamp(Date.now());
    await interaction.reply({
      embeds: [embed],
    });
    }
  }

