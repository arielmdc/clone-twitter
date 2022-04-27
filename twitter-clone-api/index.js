const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());

server.post("/usuarios", (req,res)=>{
    return res.json({usuario: "ariel"})
});

server.listen(3001, () =>{
 console.log("Servidor ta funcionando");
});