const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require ('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('offesinve_memes')
    .setDescription('send fresh offensive memes'),
    async execute(interaction, client) {
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
.setLabel("Discord_Server")
.setStyle(ButtonStyle.Link)
.setURL('https://discord.gg/nseTU5ZFhh'),
        )
        const replies = [
"https://cdn.discordapp.com/attachments/938949514688081971/1055185854131343500/b472f979dfdddfb4882cb7763efbd60b.mp4",
"https://cdn.discordapp.com/attachments/912010508826198090/1054502084831084655/Screenshot_20221210-012448_Gallery.png",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188860532957234/2985800137981650113.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188860906242048/c079f4f4c8674f92c5209c6e167b14cd.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188861212446843/SnapTik_7130103900077624581.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188861581533245/meme-1-3.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188862005149816/hey_guys.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188862382657556/0d9a343fae956c28c2172803c9453322.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188863380889630/177679a297e15c0cef3aa930913782d2.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188863863226368/95f93848efbbcab2c63ec5066ca57167.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055188864244928563/3e5321e299fda26f9eefd49a5bdc0728.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189476693004288/cute.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189477145981001/Clown_picture.mov",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189477515087872/bread.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189477867388958/video0-144.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189477867388958/video0-144.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189478320386128/twitter_20220901_123343.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189478660132914/ruler_of_everything.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189479100514366/no_father.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189479591260310/Mcnutt.mp4",
"https://cdn.discordapp.com/attachments/1055188581859201034/1055189482099462165/ip.id_o_20221129_reel_2982610221124288011_1_2982610221124288011.mp4"
        ];
        const result = Math.floor(Math.random() * replies.length);
        const newMessage = `${replies[result]}\n**all videos are putted by<@864242229366095892>, if you want to add one join our discord. (discord.gg/nseTU5ZFhh)**`
        await interaction.reply(newMessage, row)

    }

}