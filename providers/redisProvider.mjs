import  redis  from "redis";
//const REDIS_PWD = process.env.REDIS_PWD;




 const getClient = () => {
    const client = redis.createClient();
    //client.auth(REDIS_PWD)
    return client;
}

  const set = (key,commID,value) => {
    const client = getClient();
    var completeKey = key+'-'+commID;
    client.on('ready', function() {     
        client.set(completeKey, value, function(err) {
            if(err)
                console.error(err);
                
        });
    });
    
}

 const get = (key,commID)=>{
    const client = getClient();
    var completeKey = key+'-'+commID;
    client.on('ready', function() {
         client.get(completeKey,function(err,reply) {
             if(err)
             console.log(reply);
         });
      });   
}


export const redisProvider = {set,get};