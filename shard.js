const { ShardingManager } = require('discord.js');
const config = require('./Cyber-bot.json');

const shard = new ShardingManager('./index.js', {
    totalShards: 'auto',
    token: config.token
});

shard.on("shardCreate", async (shard) => {
   console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`)
})

shard.spawn(shard.totalShards, 10000)
