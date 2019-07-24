const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
 nombre: String,
 apellido: String,
 telefono: String,
 correo: String,
 direccion: String,
 Programas_id: [
 {
     type: Schema.Types.ObjectId,
     ref: "Programas"
 }
 ],

 Temas_id: [
 {
     type: Schema.Types.ObjectId,
     ref: "Temas"
 }
 ],
});

var User=  mongoose.model("User",UserSchema);
module.exports = User;
