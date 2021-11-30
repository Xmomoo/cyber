const Discord = require("discord.js")
const moment = require("moment");

module.exports = {
  name: ["userinfo", "info"],
  aliases: ["ui", "i"],
 run: async(client, message, args) => {
   const user = message.author || message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(args[0]);
   
   const userinfo = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('User info')
   .addField('User name', `${user.username}`)
   .addField('User id', `${user.id}`)
   .addField('Created at', `${moment(user.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}`)
   .addField("Joined at", `${moment(user.joinedAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}`)
   .setThumbnail(message.guild.iconURL)
   .setFooter(`${moment(message.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}`)
   
   message.reply({embeds: [userinfo]})
 }
};
