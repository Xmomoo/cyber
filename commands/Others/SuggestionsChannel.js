const suggestChannelSchema = require("../../models/suggestSchema.js")

module.exports = {
  name: "suggestionschannel",
  description: "Change the suggestions channel !",
  aliases: ["schannel"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`\`Usage: ${client.config.prefix}suggestionschannel <channel|disable>\``);
    }
    if (message.mentions.channels.first()) {
      const data = await suggestChannelSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await suggestChannelSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(
          `suggestions Channel has been  set to ${message.mentions.channels.first()}`
        );

        let newData = new suggestChannelSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(
          `Suggestions Channel set to ${message.mentions.channels.first()}`
        );

        let newData = new suggestChannelSchema({
          Suggest: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "disable") {
      const data2 = await suggestChannelSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await suggestChannelSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`suggestions channel has been disabled!`);
      } else if (!data2) {
        return message.channel.send(`Suggestions channel isnt setuped `);
      }
    }
  },
};
