module.exports = {
  name: "random",
  description: "set welcome channel",
  run: async(client, message, args) => {
    if (!args[0]) return;
    const things = [
      args[0],
      args[1],
      args[2],
      args[3],
      args[4],
      args[5]
    ];
    const response = things[Math.floor(Math.random() * things.length)];
    if (response == "undefined") {
      let response = things[Math.floor(Math.random() * things.length)];
    }
    message.reply(`${response}`);
  },
};