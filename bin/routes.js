const express = require("express");
const app = express();
const {controller} = require("./controller")

app.get("/",(req,res)=>{
    res.send("hola mundo!");
})

app.get("/users",(req,res)=>{
controller.getUsers(res);

})


 app.post("/users",(req, res)=>{
     controller.postUsers(req, res)
 })


 /* TODOS LOS USUARIOS ADSCRITOS A UN PROGRAMA*/
app.get("/usuarios/:id_programa",(req,res)=>{
    var id_programa = req.params.id_programa;
    console.log(id_programa);
    res.send("hola mundo!");
})
 /* TODOS LOS TEMAS VISTOS POR LOS USUARIOS*/
app.get("/usuarios/:id_tema",(req,res)=>{
    var id_tema = req.params.id_tema;
    console.log(id_tema);
    res.send("hola mundo!");
})


app.get("/usuarios/:id_tema",(req,res)=>{
    var id_tema = req.params.id_tema;
    console.log(id_tema);
    res.send("hola mundo!");
})

exports.app = app;