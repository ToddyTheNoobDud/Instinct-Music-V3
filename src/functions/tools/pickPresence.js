const { ActivityType } = require('discord.js')

module.exports = (client) => {
  client.pickPrecense = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "Instinct Music V3",
        status: "online",
      },
      {
        type: ActivityType.Listening,
        text: "Coded By !Toddy#6505",
        status: "idle",
      },
      {
        type: ActivityType.Playing,
        text: `${client.guilds.cache.reduce(
          (a, b) => a + b?.memberCount,
          0
        )} members`,
        status: "dnd",
      },
      {
        type: ActivityType.Competing,
        text: "Last updated: 12/22/2022",
        status: "idle",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
        activities: [
          {
            name: options[option].text,
            type: options[option].type,
          },
        ],
        status: options[option].status,
      })
  };
};
