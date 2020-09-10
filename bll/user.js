const dalRedis = require('../dal/redis')

const setLanguage = (userID,language) =>{
    var key = userID+'LANG';
    dalRedis.setVariable(key,'IT');
}

module.exports = {setLanguage};