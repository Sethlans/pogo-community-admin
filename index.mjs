import TelegramBot from 'node-telegram-bot-api';
import  config  from 'dotenv';
import {redisProvider} from './providers/redisProvider.mjs';
config.config();
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
    // Just to ping!
    bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive!');
    });
}
else{
    console.log(TOKEN);
    const bot = new TelegramBot(TOKEN, {polling: true});

    bot.on('message', function onMessage(msg) {
            redisProvider.set("text",msg.from.id,msg.text);
        });
   
}
