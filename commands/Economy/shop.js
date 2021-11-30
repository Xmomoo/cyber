const Discord = require('discord.js');

module.exports = {
  name: "shop",
  aliases: ['store'],
  run: async (client, message, args, profileData) => {
    let items = Object.keys(client.shop);
    let content = "";
    for (var i in items) {
      content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`;
    }

    let embed = new Discord.MessageEmbed()
    .setTitle("Store")
    .setDescription(content)
    .setColor("RANDOM")
    .setFooter("Do :!buy <item> to purchase the item.");
    return message.channel.send({ embeds: [embed] });
  },
};