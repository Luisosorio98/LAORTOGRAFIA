const mongoose = require("mongoose");
const User = require("./models/User");
const Tema = require("./models/Tema");

class controller {
    constructor() {
        this.connect();
    }
    async connect() {

        try {
            await mongoose.connect(
                "mongodb+srv://luisosorio98:osorio2019@cluster0-0mtsj.mongodb.net/Ortografia?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log('conectados a la base de datos!')
        } catch (e) {
            console.error(e)
        }
    }
    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })
    }
    postUsers(req, res) {
        let user = req.boddy.users;
        User.create(user, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

    getTemas(res) {
        Tema.find({}, (err, temas) => {
            if (err) throw err;
            res.send(temas);
        })
    }
    postTemas(req, res) {
        let tema = req.boddy.temas;
        Tema.create(tema, (err, newTema) => {
            if (err) throw err;
            res.send({ nT: newTema })
        })
    }

}

exports.controller = new controller()