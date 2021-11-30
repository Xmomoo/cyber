const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  description: 'kick someone from the server',
  aliases: [""],
  run: async(client, message, args) => {
    if(!message.member.permissions.has("KICK_MEMBERS")) return;
    if(!message.guild.me.permissions.has("KICK_MEMBERS")) return;
    const kickUser = message.mentions.members.first()
    if (!kickUser) return message.channel.send(`\`\`\`!kick <use> [reason]\`\`\``);
    if (message.author.id === kickUser.id) return message.channel.send("You cant kick yourself.");
    if (kickUser.id == message.guild.ownerId) return message.send('You cant kick the owner of the server.')
    if (kickUser.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("They have  power more than you");
    if (kickUser.roles.highest.position >= message.guild.me.roles.highest.position) return message.channel.send(`${kickUser} role is above my role`);
    const reason = args.slice().join(" ")

    if(reason && kickUser.kicknable) {
    kickUser.send(`You have been kicked from ${message.guild.name} by ${message.author.username}#${message.author.discriminator} for ${reason}`)
    kickUser.kick();
    message.channel.send(`kicked ${kickUser}#${kickUser.discriminator}`);
   }

      if(kickUser.kicknable && !reason) {
      kickUser.send(`You have been kicked from ${message.guild.id} by ${message.author.username}#${message.author.discriminator}`)
      kickUser.kick()
      message.channel.send(`kicked ${kickUser.username}#${kickUser.discriminator}`);
    }
  }
}