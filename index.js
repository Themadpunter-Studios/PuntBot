import Bot from "meowerbot";
import * as dotenv from 'dotenv'
import random from "random";
dotenv.config()

const bot = new Bot(); 

bot.onLogin(() => { // Runs when logged in
    bot.post("Hello from MeowerBot.js!");
});

bot.on('ready', () => {
    console.log('Bot is ready!');
})

bot.on('error', (err) => {
    console.log(err);
})

bot.onCommand("help", (ctx) => { // Runs when a new post with a bot command is sent
    ctx.reply("Commands: @username help\n@username ping");
});

bot.onCommand("ping", (ctx) => { // Runs when a new post with a bot command is sent
    ctx.reply("Pong!");
});

bot.onCommand("rng", (ctx) => { // Runs when a new post with a bot command is sent
    ctx.reply("Dice: "+random.int(1, 6));
});

bot.onMessage((data) => { // Runs when the server sends a new message
    console.log(`New message: ${data}`);
});

bot.onClose(() => { // Runs when the bot gets disconnected
    console.log("Disconnected");
    bot.login("PuntBot", process.env.PASSWORD);
});

bot.login("PuntBot", process.env.PASSWORD);