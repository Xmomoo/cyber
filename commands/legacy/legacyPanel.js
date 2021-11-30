const {
  MessageEmbed,
  MessageSelectMenu,
  MessageButton,
  MessageActionRow
} = require("discord.js");

module.exports = {

  name: "panel",
  aliases: [],
  description: "open a ticket!",

  run: async(client, message, interaction, args) => {

    try {
      let billingEmbed = new MessageEmbed()
      .setColor('#FF8225')
      .setTitle('legacyNodes panel control')
      .setDescription('Choose from the buttons below')

      const e = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('start')
        .setLabel('Start')
        .setStyle('SECONDARY')
      );

      const ee = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('stop')
        .setLabel('Stop')
        .setStyle('DANGER')
      );

      const eee = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('restart')
        .setLabel('Restart')
        .setStyle('PRIMARY')
      );

      const billingMsg = await message.channel.send({
        embeds: [billingEmbed],
        components: [e, ee, eee]
      });
    }catch(err) {
      console.log(err)
    }
  }
}
