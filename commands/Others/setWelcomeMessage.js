const messagesSchema = require("../../models/messagesSchema.js")

module.exports = {
  name: "welcomemessage",
  description: "Change the welcome message",
  aliases: ["wmessage"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`\`Usage: ${client.config.prefix}welcomemessage <message>\``);
    }

    const data = await messagesSchema.findOne({
      GuildID: message.guild.id,
    })

    message.channel.send(
      `Welcome message has been set to ${args.join(" ")}`)
    if (!data) {
      message.channel.send(
        `Welcome message set to ${args.join(" ")}`
      );

      let newData = new messagesSchema({
        GuildID: message.guild.id,
        Welcome: args.join(" ")
      });
      newData.save();
    } else {
      let updata = messagesSchema.findOneAndUpdate({
        GuildID: message.guild.id
      }, {
        $set: {
          Welcome: args.join(" ")
        }}, function(err, doc) {
        if (err) {
          console.log("Something wrong when updating data!" + err);
        }})
    }
  }
}