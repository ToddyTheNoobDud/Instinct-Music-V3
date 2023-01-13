const {
  SlashCommandBuilder,
  EmbedBuilder,
  Permissions,
  PermissionFlagsBits,
} = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("clear a amount of messages")
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("amount of messages to clear")
        .setRequired(true)
        .setMaxValue(100)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    
  async execute(interaction, client) {
  
    if (!interaction.member.permissions.has("ManageMessages"));
    if (!interaction.guild.members.me.permissions.has('ManageMessages')) {
    
      return interaction.reply({
        content: ` i/you don't have permissions.`,
        ephemeral: false,
      })
    }
    
    const { channel, options } = interaction;
    const Messages = await channel.messages.fetch();
    const Amount = options.getNumber("amount");
    await channel.bulkDelete(Amount, true).then(async (messages) => {
      const embed = new EmbedBuilder()
        .setTitle(`Done`)
        .setDescription(`Cleared ${Amount} messages`)
        .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1054477264886177944/get-real-cat.gif')
        .setColor(0x18e1ee)
        .setTimestamp(Date.now())
        .setFooter({
          text: `Made with ❤️ by !Toddy#6505`,
          iconURL: client.user.displayAvatarURL({ dynamic: true }),
        });
        await interaction.reply({
            embeds: [embed],
          });
    });
    }
  
}

