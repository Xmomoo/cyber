const client = require("../index");
const Discord = require('discord.js')

client.on("guildDelete", guild => {
  const channel = "838389000577351690"
  const channelId = client.channels.cache.get(channel)

  let leaveEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('left a server')
  .addField('Server name:', `${guild.name}`)
  .addField('Server id:', `${guild.id}`)
  .addField('Memberd count:', `${guild.members.cache.size}`)
  
  channelId.send({ embeds: [leaveEmbed] })
})