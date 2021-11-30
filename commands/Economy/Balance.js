const Discord = require('discord.js');
const profileModel = require('../../models/profileSchema')

module.exports = {
  name: "balance",
  aliases: ['bal'],
  run: async (client, message, args, profileData) => {

    const balUser = message.mentions.users.first()
    if (balUser) {
      const userId = message.guild.members.cache.get(`${balUser.id}`).user
      try {
        const response = await profileModel.findOne(
          {
            userID: userId.id
          })
        let bal = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${userId.username}\'s balance`)                                                                            .setDescription(`Wallet: ${response.coins}\nBank: ${response.bank}`);

        message.reply({
          embeds: [bal]
        });
      }catch(err) {
        message.reply("The mentioned user seems to have no account")
      }
    } else {
      let balEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${message.author.username}\'s balance`)
      .setDescription(`Wallet: ${profileData.coins}\nBank: ${profileData.bank}`);

      message.reply({
        embeds: [balEmbed]
      })
    }
  }};