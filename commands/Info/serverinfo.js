//const shard = require('../../shard.js')
const Discord = require('discord.js');
const moment = require("moment");

module.exports = {
   name: "serverinfo",
   aliases: ["si"],
   description: "View server info",
 run: async(client, message, args) => {

const ah = message.guild.presences.cache.filter(e => e.status === "online").size + message.guild.presences.cache.filter(e => e.status === "dnd").size + message.guild.presences.cache.filter(e => e.status === "idle").size;


const serverinfo = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`Server info`)
  .addField('Server name', `${message.guild.name}`)
  .addField('Server id', `${message.guild.id}`)
  .addField('Server owner', `<@${message.guild.ownerId}>`)
  .addField('Members', `Total\: ${message.guild.members.cache.size}\nOnline\: ${ message.guild.presences.cache.filter(e => e.status === "online").size}\nDnd\: ${ message.guild.presences.cache.filter(e => e.status === "dnd").size}\nIdle\: ${ message.guild.presences.cache.filter(e => e.status === "idle").size}\nOffline\: ${message.guild.members.cache.size - ah}`)
  .addField('Channels', `Total\: ${message.guild.channels.cache.size}\nText\: ${message.guild.channels.cache.filter(e => e.type === "GUILD_TEXT").size}\nVoice\: ${message.guild.channels.cache.filter(e => e.type === "GUILD_VOICE").size}`)
  .addField('Created at', `November 10th 2020, 22:09:20 PM`)
  .setThumbnail(message.guild.iconURL())
  .setFooter(`${moment(message.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}`);

   message.reply({ embeds: [serverinfo] })
    }}
