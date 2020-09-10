const dalRedis = require('../dal/redis');
const fallbackLang = 'en';
const getTranslation = (key,languageID) =>{
    let fullKey =key+'-'+languageID;    
    let reply = dalRedis.getVariable(fullKey);
    if(!reply){
        fullKey=key+'-'+fallbackLang;
        reply = dalRedis.getVariable(fullKey);
    }

}