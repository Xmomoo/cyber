const client = require("../index");

client.on("ready", () => {
    console.log(`Hello lol`);
    setInterval(() => client.user.setActivity(`${client.config.prefix}help`, { type: "WATCHING" }), 50000);
    client.user.setStatus("idle");
});
