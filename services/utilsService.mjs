
export default (cacheProvider) =>{

    const checkProfanity = (msgText,commID)=>{
        const profanityArray = cacheProvider.get("badWords",commID);
        returnprofanityArray.every(function(v) {
            return msgText.indexOf(v) != -1;
          });


    }

    const addBadWord=(word,commID)=>{
        const profanityArray = cacheProvider.get("badWords",commID);
        if(profanityArray===null || profanityArray===undefined)
            profanityArray=[];
        if(profanityArray.indexOf(word)===-1){
            profanityArray.push(word);
            cacheProvider.set("badWords",commID,profanityArray);
            return 1;
        }
        else
            return 2;
    }

    const removeBadWord = (word)=>{

    }
}

