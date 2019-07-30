const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionesSchema = new Schema ({
 tipo: String,
 duracion: String,
 
});

var Evaluaciones=  mongoose.model("Evaluaciones",EvaluacionesSchema);
module.exports = Evaluaciones;
