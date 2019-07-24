const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramasSchema = new Schema ({
 nickname: String,
 password: String,
 picture: String,
});

var Programas=  mongoose.model("Programas",UserSchema);
module.exports = Programas;
