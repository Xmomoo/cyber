const welcomeChannelSchema = require("../../models/welcomeSchema.js")

module.exports = {
  name: "welcomechannel",
  description: "Change the welcome channel",
  aliases: ["wchannel"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`\`Usage: ${client.config.prefix}welcomechannel <channel|disable>\``);
    }
    if (message.mentions.channels.first()) {
      const data = await welcomeChannelSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await welcomeChannelSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(
          `welcome Channel has been set to ${message.mentions.channels.first()}`
        );

        let newData = new welcomeChannelSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(
          `welcome Channel set to ${message.mentions.channels.first()}`
        );

        let newData = new welcomeChannelSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "disable") {
      const data2 = await welcomeChannelSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await welcomeChannelSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`welcome channel has been disabled!`);
      } else if (!data2) {
        return message.channel.send(`welcome channel isnt setuped `);
      }
    }
  },
};
