const{
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    Invite
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('About Instinct Music V3 and !Toddy'),
    async execute(interaction, client) {

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setLabel('Invite Bot')
            .setStyle(ButtonStyle.Link)
            .setURL('https://discord.com/api/oauth2/authorize?client_id=1050138724001910794&permissions=8&scope=bot%20applications.commands'),
            new ButtonBuilder()
            .setLabel('Discord Server')
            .setStyle(ButtonStyle.Link)
            .setURL('https://discord.gg/nseTU5ZFhh'),
            new ButtonBuilder()
            .setLabel('Top.gg')
            .setStyle(ButtonStyle.Link)
            .setURL('https://top.gg/bot/1050138724001910794')
        )
        const embed = new EmbedBuilder()
            .setTitle('Instinct Music V3 - The music To All In One!')
            .setDescription('Instinct Music V3 - The music To All In One, A bot Builded in the discord js v14, A bot that is new , but will achive one of the best features ever, famous bot ping and a 100% uptime, Im a bot that is a solo project. All my music commands is builded with distube v4, Achiving the best music quality in the market!\n\nIm a bot based on some memes too!, like baller, get real, random gifs etc!, i even have a meme command. \n \n \n ')
            .addFields([
                {
                    name: 'Main Info about.',
                    value: `**Category on top.gg**\nMusic,All in one,Multi , Non-nsfw, fun, moderation, 247, music\n\n**Developers:**\n<@864242229366095892>, Instinct Development`,
                    inline: true
                },
                {
                    name: "bot info",
                    value: `**Discord js:**\n v14.7.1\n\n **NodeJs:**\n v16.17.1 `,
                    inline: true
                },
            ])
            .addFields([
                {
                    name: 'info about owner',
                    value: `Hey im <@864242229366095892>, Im learning nodeJS and building this bot for fun lol, and i don't pay / get payed for anything that i do on the bot, so its a fun time to me just chilling and coding the bot.`,
                    inline: true
                }
            ])
            .setColor(0x18e1ee)
            .setFooter({
                text: 'Made with ❤️ by !Toddy#6505',
                iconURL: `https://cdn.discordapp.com/attachments/912010508826198090/1045857980299616336/unknown.png`
            })
            .setThumbnail('https://cdn.discordapp.com/avatars/1050138724001910794/47dfeb25983920ec9c4a20aef76b0079.webp?size=512')
            .setTimestamp(Date.now());
        await interaction.reply({
            components: [row],
            embeds: [embed]
          });
    }

}