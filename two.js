const { getEventListeners } = require("events");
const express = require("express");
const api = express();
const port=81;

api.listen(port, ()=>{
    console.log("http://localhost:"+port);
});

let Password="Nicoscheisst";

api.post("/secret", (req, res)=>{
    if(Password=="Nicoscheisst"){
    res.status(200).send("ok");
    }
});
