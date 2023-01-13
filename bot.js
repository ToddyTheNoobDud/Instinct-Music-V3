require("dotenv").config();
const { token, logs, errorLogsChannel, botMainColor } = process.env;
const { connect, Mongoose, default: mongoose } = require("mongoose");
const AmeClient = require("amethyste-api");
const config1 = process.env
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const fs = require("fs");

/* Music System */
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");

const {
  Guilds,
  GuildMembers,
  GuildMessages,
  GuildVoiceStates,
  DirectMessages,
  GuildMessageReactions,
  GuildEmojisAndStickers,
  GuildWebhooks,
  GuildIntegrations,
  MessageContent,
} = GatewayIntentBits;
const {
  User,
  Message,
  GuildMember,
  ThreadMember,
  GuildScheduledEvent,
  Reaction,
} = Partials;

const client = new Client({
  intents: 3276799,
  partials: [
    User,
    Message,
    GuildMember,
    ThreadMember,
    GuildScheduledEvent,
    Reaction,
  ],
});
//collections load
client.commands = new Collection();
client.modals = new Collection();
client.voiceGenerator = new Collection();
client.buttons = new Collection();
client.commandArray = [];
//collection ends

//load functions
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./src/functions/${folder}/${file}`)(client);
}
//end loading functions

//embeds
client.mainColor = parseInt(botMainColor);
client.hexMainColor = botMainColor.replace('0x', "#");
//embeds end
//music player config start
(client.distube = new DisTube(client)),
  {
    leaveOnEmpty: true,
    nsfw: true,
    emitNewSongOnly: true,
    leaveOnFinish: true,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
  };
//music player congif end
client.config = config1;
const config = process.env
//process loaders start
module.exports = client;
client.HandleEvents();
client.HandleCommands();
client.HandleComponents();
client.login(token);
connect(process.env.database);
mongoose.set("strictQuery", true);
//process loader end