const { ActivityType } = require('discord.js')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`${client.user.tag} Instinct Music V3 is ready!`);
    

    setInterval(client.pickPrecense, 15 * 1000);
  }
}
