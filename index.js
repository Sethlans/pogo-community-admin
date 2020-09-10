const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const commonCommands = require('./commands/commons');
dotenv.config();
const TOKEN = process.env.TELEGRAM_TOKEN;
const debug = process.env.DEBUG;
if(debug==0){
    const options = {
    webHook: {
        port: 443,
        key: `${__dirname}/../ssl/key.pem`, // Path to file with PEM private key
        cert: `${__dirname}/../ssl/crt.pem` // Path to file with PEM certificate
    }
    };
    // This URL must route to the port set above (i.e. 443)
    const url = 'https://<PUBLIC-URL>';
    const bot = new TelegramBot(TOKEN, options);


    // This informs the Telegram servers of the new webhook.
    bot.setWebHook(`${url}/bot${TOKEN}`, {
    certificate: options.webHook.cert,
    });

    commonCommands.defineCommands(bot);
    // Just to ping!
    bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive!');
    });
}
else{
    console.log(TOKEN);
    const bot = new TelegramBot(TOKEN, {polling: true});
    commonCommands.defineCommands(bot);
    bot.on('message', function onMessage(msg) {
       console.log(msg);
        });
   
}
