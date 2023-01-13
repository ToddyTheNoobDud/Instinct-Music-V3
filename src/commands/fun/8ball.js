    const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

    module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Random Thing")
        .addStringOption((option) =>
        option
            .setName("question")
            .setDescription("Enter a Question")
            .setRequired(true)
        ),
        async execute(interaction, client) {
            const question = interaction.options.getString('question', true);
            const replies = [
                "Yes.",
                "No.",
                "Never.",
                "Definitely.",
                "Ask again later.",
                "Imagine", 
                "Of course not",
                "Absolutely",
                "idk",
                "Ask your friend",
                "Wth no",
                "Never",
                "Never gonna give you up, Never gonna let you down",
                "Ask somebody else"
            ];
            const result = Math.floor(Math.random() * replies.length); 

            const embed = new EmbedBuilder()
                .setTitle(`8 Ball result!`)
                .addFields([
                    {
                        name: "question",
                        value: `**Question:** ${question}`,
                        inline: true
                    },
                ])
                .setDescription(`**Answer**: ${replies[result]}`)
                .setColor(0x18e1ee)
                .setTimestamp(Date.now());

            interaction.reply({ 
                embeds: [embed],
            });
            return;
        },
        catch (err)
        {
            return Promise.reject(err);
        }
    };
        
