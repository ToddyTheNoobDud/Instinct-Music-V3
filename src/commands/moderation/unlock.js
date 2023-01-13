const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('unlock')
       .setDescription('unlock a channel')
       .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
        async execute(interaction, client) {
          if (!interaction.member.permissions.has("ManageChannels"))
          if (!interaction.guild.members.me.permissions.has('ManageChannels')) {
          
            return interaction.reply({
              content: ` i don't have permissions.`,
              ephemeral: false,
            })
          }
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: true
              });
              const embed = new EmbedBuilder()
                .setTitle('Channel unlocked')
                .setDescription(`Channel: **${interaction.channel}got unlocked!!!11**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1053316737115885608/get-real-cat.gif')
                .setColor(0x18e1ee);

              await interaction.reply({embeds: [embed], ephemeral: false});
              
        
    }
  }