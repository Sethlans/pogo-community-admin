const redis = require("redis");
//const REDIS_PWD = process.env.REDIS_PWD;

const getClient = () => {
    const client = redis.createClient();
    //client.auth(REDIS_PWD)
    return client;
}

const setVariable = (key,value) => {
    const client = getClient();
    client.set(key, value, function(err) {
        console.error(err);
      });
}

const getVariable = (key)=>{
    const client = getClient();
    client.get(key, function(err, reply) {
        return reply.toString();
      });
}


module.exports = { setVariable, getVariable }