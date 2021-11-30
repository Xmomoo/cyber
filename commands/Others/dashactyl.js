module.exports = {
  name: "dtest",
  run: async(client, message, args) => {
    if(message.author.id !== "762509371942633473") return
    
const Discord = require('discord.js');
const fetch = require('cross-fetch');


fetch(`https://client.legacynodes.xyz/api/userinfo/?id=762509371942633473`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer api`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(async (json) => {
      return message.reply(`${json.extra.disk}`);
  });

  }
}