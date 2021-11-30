const client = require("../index");
const {
  MessageEmbed,
  MessageSelectMenu,
  MessageButton,
  MessageActionRow
} = require("discord.js");

client.on("guildCreate", guild => {
  const channel = "838389000577351690"
  const channelId = client.channels.cache.get(channel)

  try {
    message.guild.channels.cache.filter(x => x.type != "category").random().createInvite()
    .then(inv => message.reply(`${message.guild.name} | ${inv.url}`));
} catch(err) {
  console.log(err);
}

  let joinEmbed = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Joined new server')
  .addField('Server name', `${guild.name}`)
  .addField('Server id', `${guild.id}`)
  .addField('members count', `${guild.members.cache.size}`)
  .addField('Invite', `h`)

    channelId.send({
      embeds: [joinEmbed]
    })
  })