"use strict";

// Dependencies
const mlSentiment = require("ml-sentiment")()
const request = require("request-async")

// Main
function ToxPic(string){
    return new Promise(async(resolve)=>{
        var isToxic = false
    
        if(mlSentiment.classify(string) < 1) isToxic = true

        var response = await request.post("https://toxicity-api.com/", {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ messages: string })
        })

        response = JSON.parse(response.body)

        if(response.clasification[6].results[0].match) isToxic = true
        
        resolve(isToxic)
    })
}

module.exports = ToxPic