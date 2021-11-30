const client = require("../index");
const profileModel = require("../models/profileSchema");

client.on("messageCreate", async (message) => {

  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({
      userID: message.author.id
    });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 100,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }


  const [cmd,
    ...args] = message.content
  .slice(client.config.prefix.length)
  .trim()
  .split(" ");

  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

  if (!command) return;
  await command.run(client, message, args, profileData);
});