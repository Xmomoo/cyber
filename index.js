const {
 Client,
 Collection
} = require("discord.js");

const client = new Client({
 intents: 32767,
});
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./Cyber-bot.json");
//client.shard = require('./shard.js');
client.shop = {
  laptop: {
    cost: 2000
  },
  mobile: {
    cost: 1000
  },
  pc: {
    cost: 3000
  }
};
require("./handler")(client);

client.login(client.config.token)
