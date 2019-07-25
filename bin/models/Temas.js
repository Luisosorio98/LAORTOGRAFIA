const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemasSchema = new Schema ({
 nombre: String,
 
});

var Temas=  mongoose.model("Temas",TemasSchema);
module.exports = Temas;
