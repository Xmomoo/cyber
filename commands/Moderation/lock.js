module.exports = {
  name: "lock",
  description: "lock channel",
  run: async(client, message, args) => {
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      const channel = message.mentions.channels.first()
      if (!channel) {
        await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
          SEND_MESSAGES: false
        }).catch(err => console.log(err));
        message.channel.send(`Successfully locked <#${message.channel.id}>`);
      } else {
        await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
          SEND_MESSAGES: false
        }).catch(err => console.log(err));
        message.channel.send(`Successfully locked <#${channel.id}>`);
      }
    }
  },
};