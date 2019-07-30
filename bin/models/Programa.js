const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramasSchema = new Schema ({
 nombre: String,
 semestrecursado: String,
 
});

var Programas=  mongoose.model("Programas",ProgramasSchema);
module.exports = Programas;
