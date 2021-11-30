module.exports = {
  name: "unlock",
  description: "unlock channel",
  run: async(client, message, args) => {
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      const channel = message.mentions.channels.first()
      if (!channel) {
        await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
          SEND_MESSAGES: true
        }).catch(err => console.log(err));
        message.channel.send(`Successfully unlocked <#${message.channel.id}>`);
      } else {
        await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
          SEND_MESSAGES: true
        }).catch(err => console.log(err));
        message.channel.send(`Successfully unlocked <#${channel.id}>`);
      }
    }
  },
};