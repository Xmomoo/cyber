const {
  MessageEmbed
} = require("discord.js");
const suggestChannelSchema = require("../../models/suggestSchema.js");

module.exports = {
  name: "suggest",
  description: "suggest something",
  run: async(client, message, args) => {
    if (!args[0]) return message.channel.send(`What you wanna suggest?\nPlease follow this\n${client.config.prefix}suggest <suggestion>`);
    const schannel = message.mentions.channels.first();
    const data = await suggestChannelSchema
    .findOne({
      GuildID: message.guild.id,
    })
    .catch((err) => console.log(err));
    if (!data) return message.channel.send(`Suggestions channel isnt setuped\nTo setup it\n${client.config.prefix}suggestionschannel <channel|disable>`);
try {
    const channelId = data.Suggest;
    const channel = message.guild.channels.cache.get(channelId);
    const suggestion = args.join(" ");
    const suggestionEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("New suggestion!")
    .setDescription(`${suggestion}`)
    .setFooter(`Suggestion by ${message.author.username}`)
    .setTimestamp();

    message.delete();

    channel.send({
      embeds: [suggestionEmbed]
    }).then(suggestMessage => {
      suggestMessage.react("👍"),
      suggestMessage.react("👎");
    });
    message.channel.send("Successfully sent your suggestion").then(msg => {
      setInterval(() => msg.delete(), 30000);
    });
}catch(e) {
  console.log(e);
}
  },
};