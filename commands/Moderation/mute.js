module.exports = {
  name: "mute",
  description: "Mute any member",
  run: async(client, message, args) => {
    const muteUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!muteUser) return message.reply("Please provide user id or mention someone ")
    const muterole = message.guild.roles.cache.find(x => x.name === "Muted");
    
    if(!muterole) {
      message.reply("Didnt find the muted role, creating one")
     message.guild.roles.create({ name: "Muted", reason: "to mute people" })
    }
    const e = message.guild.roles.cache.find(x => x.name === "Muted");
    const muteRoleid = message.guild.roles.cache.get(`${e.id}`)
    const allChannels = message.guild.channels.cache;
    await allChannels.permissionOverwrites.edit(muteRoleid, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
    }).catch(err => console.log(err));
    muteUser.roles.add(mutedrole2)
    message.reply(`muted ${muteUser.username} `)
  }
}