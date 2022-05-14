import Eris = require('eris');

const bot = Eris(process.env.DISCORD_BOT_TOKEN);
bot.on("ready", () => {
  console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
  if(msg.content === "!ping") {
    bot.createMessage(msg.channel.id, "Pong!");
  }
});
bot.connect();