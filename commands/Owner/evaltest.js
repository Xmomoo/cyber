const { inspect } = require('util');

module.exports = {
  name: "teval",
  description: "Evaluates arbitrary Javascript.",

  run: async (client, message, args) => {
    
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      if(evaled > 3999) return message.reply("Alot of output")
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error during evaluation.');
    }
  }};