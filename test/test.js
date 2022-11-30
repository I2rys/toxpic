"use strict";

// Dependencies
const toxPic = require("../index")

// Main
describe("Is Toxic", ()=>{
    test("Toxic", async()=>{
        const result = await toxPic("Your really bad lol.")
    
        expect(result).toBe(true)
    })

    test("Not Toxic", async()=>{
        const result = await toxPic("Thank you so much!")
    
        expect(result).toBe(false)
    })
})