const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const request = require('request');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('random_fact')
    .setDescription('send a random fact'),
    async execute (interaction, client) {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en'

        request(url, function (err, response, body) {
            fact = JSON.parse(body).text;

                const embed = new EmbedBuilder()
                .setTitle('random fact')
                .setDescription(fact)
                .setThumbnail('https://cdn.discordapp.com/attachments/919680757813882910/1055211407974604951/IMG_1548.png')
                .setColor(0x18e1ee)
                .setFooter({
                    text: `Random fact lol`,
                    iconURL: `https://cdn.discordapp.com/attachments/919680757813882910/1055211407974604951/IMG_1548.png`
                })
                .setTimestamp(Date.now())
                 interaction.reply({
                    embeds: [embed],
                })
            })
        }
    }
