const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotasSchema = new Schema ({
 nota1: String,
 nota2: String,
 nota3: String,
 Evaluaciones_id: [
 {
     type: Schema.Types.ObjectId,
     ref: "Evaluaciones"
 }
 ],


});

var Notas=  mongoose.model("Notas",NotasSchema);
module.exports = Notas;