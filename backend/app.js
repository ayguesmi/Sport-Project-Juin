//import express module
const express = require("express");
//import body-parser module
const badyParser = require("body-parser");
// create express application: app
const app = express();

// All Business Logics

// app..ACTION-HTTP("PATH",(req,res)=> {
// Here business logics
// })

app.get("/matches",(req,res)=> {
    
})

//to make app importable from another files
module.exports = app;