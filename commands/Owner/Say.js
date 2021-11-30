module.exports = {
  name: "say",
  run: async(client, message, args) => {
    if(message.author.id !== "762509371942633473") return;
    const toSay = args.join(" ")
    message.channel.send(`${toSay}`)
  }
}