//handlecommands.js

const fs = require("fs");
const { Routes, REST } = require("discord.js");


module.exports = (client) => {
  client.HandleCommands = async () => {
    const commandFolder = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolder) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
      }
    }
    CLIENT_ID = (process.env.CLIENT_ID);
    
    const rest = new REST({ version: '10' }).setToken(process.env.token);
    
    (async () => {
      try {
        console.log('Started refreshing application (/) commands.');
    
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: client.commandArray });
    
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
