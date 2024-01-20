//require('dotenv').config({path:'./env '})


import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import mongoose from db"mongoose";
// import {DB_NAME} from "./constants";

import express from "express";
const app=express()

 
dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT }`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!")
})



/*

;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR :",error)
        throw err
    }
})()

*/