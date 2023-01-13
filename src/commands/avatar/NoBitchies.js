const { EmbedBuilder, SlashCommandBuilder, } = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('no_bitchies')
        .setDescription('no bitchies meme')
        .addStringOption(option =>(
            option
            .setName('input')
            .setDescription('the words that u want in the meme gen')
            .setRequired(true)
        )),
        async execute(interaction, client) {
            const input = interaction.options.getString('input')
            const url = `https://some-random-api.ml/canvas/nobitches?no=no+${input}`
                const embed = new EmbedBuilder()
                .setTitle('no bitchies?')
                .setDescription('no bitchies?')
                .setColor(client.mainColor)
                .setImage(url)
                .setFooter({
                    text: `no bitchies?\nMade by !Toddy#6505`,
                    iconURL: `${url}`
                })
                await interaction.reply({
                    embeds: [embed],
                })
            },
                catch (err) {
                    return interaction.reply({
                        content: `there was an error`,
                        ephemeral: true,
                    })
        },

        }