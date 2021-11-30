const welcomeModel = require("../models/welcomeSchema.js");
const messagesModel = require("../models/messagesSchema.js");
const client = require("../index")

client.on("guildMemberAdd", async (member) => {
  try {
    const guild = member.guild
    const data = await welcomeModel
    .findOne({
      GuildID: guild.id,
    })
    const data2 = await messagesModel.findOne({
      GuildID: guild.id,
    })
    .catch((err) => console.log(err))
    console.log(data2.Welcome)
    if (!data) return;
    if (!data2) return;
    const channelId = data.Welcome
    const channel = guild.channels.cache.get(channelId)
    const message = data2.Welcome
    if(message) {
      channel.send(`${message}`)
    } else {
    channel.send(`welcome **${member.user.username}** to **${guild.name}**`)
    }
  }catch(e) {
    console.log(e)
  }
})