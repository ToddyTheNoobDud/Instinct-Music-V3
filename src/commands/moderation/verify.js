const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
const captchaDB = require("../../etc/captchasystem");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify_setup")
    .setDescription("Verify setup")
    .addChannelOption((option) =>
      option.setName("channel").setDescription("the channel.").setRequired(true)
    )
    .addRoleOption((option) =>
      option.setName("role").setDescription("role option.").setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        const { options, guild } = interaction;
        const role = options.getRole("role")
        const button = new ButtonBuilder()
                .setCustomId("captcha-btn")
                .setLabel("✅ Verify")
                .setStyle(ButtonStyle.Success);

                const captcha_channel = options.getChannel("channel")
                const captcha_embed = new EmbedBuilder()
                .setColor(0x18e1ee)
                .setTitle("verify system")
                .setDescription("click in the green button **make sure your dms are open**")

                await captchaDB.findOneAndUpdate(
                    {GuildID: guild.id},
                    {Role: role.id},
                    {new: true, upsert: true})

                captcha_channel.send({embeds: [captcha_embed], components: [new ActionRowBuilder().addComponents(button)]});
    }
};
