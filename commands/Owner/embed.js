const Discord = require('discord.js');
module.exports = {
  name: "embed",
  run: async(client, message, args) => {
    if(message.author.id !== "762509371942633473") return;
    const toSay = args.join(" ")
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${toSay}`)
    .setFooter(`By ${message.author.username}`)
    .setTimestamp();
message.channel.send({ embeds: [embed] })
  }
}