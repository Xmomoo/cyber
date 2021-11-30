const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  description: 'Ban someone from the server',
  aliases: [""],
  run: async(client, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return;
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    const banUser = message.mentions.members.first()
    if (!banUser) return message.channel.send(`\`\`\`!ban <user> [reason]\`\`\``);
    if (message.author.id === banUser.id) return message.channel.send("You cant ban yourself.");
    if (banUser.id == message.guild.ownerId) return message.send('You cant ban the owner of the server.')
    if (banUser.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("They have a power more than you");
    if (banUser.roles.highest.position >= message.guild.me.roles.highest.position) return message.channel.send(`${banUser} role is above my role`);
    const reason = args.slice(0).join(" ")

    if(reason && banUser.bannable) {
    banUser.send(`You have been banned from ${message.guild.id} by ${message.author.username} for ${reason}`)
    banUser.ban();
    message.channel.send(`banned ${banUser}`);
   }

      if(banUser.bannable && !reason) {
      banUser.send(`You have been banned from ${message.guild.id} by ${message.author.username} `)
      banUser.ban()
      message.channel.send(`banned ${banUser}`);
    }
  }
}