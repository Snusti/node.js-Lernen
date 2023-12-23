const { getEventListeners } = require("events");
const express = require("express");
const api = express();
const port=81;

api.listen(port, ()=>{
    console.log("http://localhost:"+port);
});

api.get("/testStatus", (req, res)=>{
    res.status("200").send("OK")
});