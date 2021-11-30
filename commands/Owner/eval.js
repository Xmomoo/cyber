const {
  MessageEmbed
} = require("discord.js");
const chalk = require('chalk')
const owner = ["762509371942633473"];

module.exports = {
  name: "eval",
  description: "Run A Whole Code With This Command!",

  run: async(client, message, args) => {

    if (message.content.includes("token")) return;
//    if (message.author.id != owner)      return
    try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("What do you want to evaluate?")
      }

      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      let Aembed = new MessageEmbed()
      .addField("Input", `\`\`\`${code}\`\`\``)
      .addField("Output", `\`\`\`Alot of output\`\`\``)
      .setColor("GREEN");

      if (evaled.length > 1023) {
        message.channel.send({
          embeds: [Aembed]});
        console.log(chalk.green(evaled))
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+")
        return;
      }
      
      let embed = new MessageEmbed()
      .addField("Input", `\`\`\`${code}\`\`\``)
      .addField("Output", `\`\`\`${evaled}\`\`\``)
      .setColor("GREEN");

      message.channel.send({
        embeds: [embed]});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
    }
  }
}
