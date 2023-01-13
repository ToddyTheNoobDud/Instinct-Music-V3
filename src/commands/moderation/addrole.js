const {
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addrole")
    .setDescription("Add role to somone")
    .addRoleOption((option) =>
      option.setName("role").setDescription("the role").setRequired(true)
    )
    .addUserOption((option) =>
      option.setName("target").setDescription("the user").setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
    async execute(interaction, client) {
        const target = interaction.options.getMember("target");
        const role = interaction.options.getRole("role");
        if(!target) interaction.reply({ content: "This is not a valid User", ephemeral: true })
        if(!role) interaction.reply({ content: "This is not a valid Role", ephemeral: true })
        target.roles.add(role.id)
        const embed = new EmbedBuilder()
        .setTitle('done')
        .setDescription(`added (@${role.name.toString()}) to ${target.user.toString()}`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cdn.discordapp.com/attachments/912010508826198090/1045857980299616336/unknown.png')
        .setFooter({
            text: 'Made with ❤️ by !Toddy#6505',
            iconURL: `https://cdn.discordapp.com/attachments/938949514688081971/1055564046482546868/get-real-cat.gif`
        })
        .setTimestamp(Date.now())
        await interaction.reply({
            embeds: [embed],
        })
    }
};
