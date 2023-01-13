const { ButtonInteraction, Client, AttachmentBuilder, EmbedBuilder } = require('discord.js')
const DB = require('../../etc/captchasystem')
const { Captcha } = require('captcha-canvas')

module.exports = {
    data: {
        name: "captcha-btn"
    },
    /**
     * 
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { member, guild } =  interaction;

        DB.findOne({ GuildID: guild.id }, async (err, data) => {
            if(!data) return console.log(`Captcha Disabled for ${guild.name}!`);

            const captcha = new Captcha();
            captcha.async = true;
            captcha.addDecoy();
            captcha.drawTrace();
            captcha.drawCaptcha();

            const captchaAttachment = new AttachmentBuilder(await captcha.png)
            .setName("captcha.png");
            
            const captchaEmbed = new EmbedBuilder()
            .setColor(0x18e1ee)
            .setDescription("complete this captcha in 30s.")
            .setImage('attachment://captcha.png')
            .setTimestamp(Date.now())
            .setFooter({
                text: `made by !Toddy#6505 with ❤️`,
                iconURL: `https://media.discordapp.net/attachments/783185306606239804/1048195703463231569/caption.gif`
            })
            try {
                const msg = await member.user.send({files: [captchaAttachment], embeds: [captchaEmbed]})
                
                const wrongCaptchaEmbed = new EmbedBuilder()
                .setColor(0x18e1ee)
                .setDescription("wrong captcha bro");

                const filter_ = (message) => {
                    if(message.author.id !== member.id) return;
                    if(message.content === captcha.text) {
                        return true;
                    } else {
                        member.send({embeds: [wrongCaptchaEmbed]})
                    }
                }

                try {
                    const response = await msg.channel.awaitMessages({
                        filter: filter_,
                        max: 1,
                        time: 30*1000,
                        errors: ["time"]});

                    if(response) {
                        DB.findOne({ GuildID: member.guild.id }, async (err, data) => {
                            if(!data) return;
                            if(!data.Role) return;

                            const role = member.guild.roles.cache.get(data.Role)
                            member.roles.add(role)
                            member.user.send("you are now verified lol");
                        })
                    } else {
                        member.user.send("why u din't verify");
                    }

                } catch (error) {
                    return console.log(error)
                }

            } catch (error) {
                return console.log(error)
            }
        })
        await interaction.reply({
            content: `look your dms`,
            ephemeral: true
        })
    }
}