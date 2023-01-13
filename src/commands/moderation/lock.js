const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('lock')
       .setDescription('Lock a channel')
       .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
        async execute(interaction, client) {
          
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: false
              });
              const embed = new EmbedBuilder()
                .setTitle('Channel Locked')
                .setDescription(`Channel: **${interaction.channel} got locked lol!!11!**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/938949514688081971/1053316737115885608/get-real-cat.gif')
                .setColor(0x18e1ee);

              await interaction.reply({embeds: [embed], ephemeral: false});
              
        
    }
  }
