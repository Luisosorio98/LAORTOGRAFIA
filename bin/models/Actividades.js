const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String,
    fecha: String,
    Temas_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Temas"
        }
    ],
    Evaluaciones_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Evaluaciones"
        }
    ],


});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;