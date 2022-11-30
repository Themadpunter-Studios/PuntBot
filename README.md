# MeowerBot.js
Port of MeowerBot.py to Node.js
## Installing
```bash
npm install MeowerBots/MeowerBot.js
```
## Example Bot
```js
import Bot from "meowerbot";

const bot = new Bot("", "", function() {
    bot.post("Hello from MeowerBot.js!");
});

bot.on_new_post(function(username, content) {
    if (content.startsWith("*help")) {
        bot.post("Commands: *help");
    }
});
```