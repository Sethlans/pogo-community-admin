const userBL = require('../bll/user');

const defineCommands = (bot) =>{
bot.onText(/\/setLanguage/, (msg) => {

    userBL.setLanguage(msg.chat.id,'IT-it');
        
    });
}

module.exports={defineCommands};