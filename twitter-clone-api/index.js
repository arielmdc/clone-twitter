const express = require("express");
const server = express();

server.get("/usuarios", (req,res)=>{
    return res.json({usuario: "ariel"})
});

server.listen(3001, () =>{
 console.log("Servidor ta funcionando");
});