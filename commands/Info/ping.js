module.exports = {
  name: "ping",
  description: "ping",
  aliases: [""],
  run(client, message, args) {
    message.reply(`${client.ws.ping}`);
  },
};