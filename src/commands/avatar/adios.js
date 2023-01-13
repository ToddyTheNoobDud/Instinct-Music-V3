const { EmbedBuilder, SlashCommandBuilder, } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('adios')
    .setDescription('adios avatar.')

    .addUserOption(option => option.setName("user").setDescription("Select the User to check the Avatar from.").setRequired(true)),

    async execute(interaction, client) {

         const user = interaction.options.getMember("user")
        if(!user) return interaction.reply({ content: "This User is invalid"})
        const url = `https://vacefron.nl/api/adios?user=${user.user.avatarURL({dynamic: true, size: 256, extension: 'png'})}`
        const embed = new EmbedBuilder()
        .setTitle(`${user.user.username}'s adios`)
        .setImage(url)
        .setColor(0x18e1ee)
        

        await interaction.reply({ embeds: [embed], ephemeral: false });
        return;
    },
    catch (err)
    {
        return Promise.reject(err);
    }

}
    