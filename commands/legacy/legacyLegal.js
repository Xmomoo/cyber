const {
  MessageEmbed,
  MessageSelectMenu,
  MessageButton,
  MessageActionRow
} = require("discord.js");

module.exports = {

  name: "legal",
  aliases: [],
  description: "open a ticket!",

  run: async(client, message, args) => {
    try {
      let billingEmbed = new MessageEmbed()
      .setColor('#FF8225')
      .setTitle('legacyNodes legal')
      .setDescription('Choose from the buttons below')

      const ticketRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setLabel('Privacy policy')
        .setStyle('LINK')
        .setURL('https://legacynodes.xyz/Privacy-Policy.html')
      );
      const e = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setLabel('Terms of service')
        .setStyle('LINK')
        .setURL("https://legacynodes.xyz/Terms-Of-Service.html")
      );

      const billingMsg = await message.channel.send({
        embeds: [billingEmbed],
        components: [e, ticketRow]
      });

    }catch(err) {
      console.log(err)
    }
  }
}
