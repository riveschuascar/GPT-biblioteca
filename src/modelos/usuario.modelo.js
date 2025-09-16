import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tipoUsuario: { type: String, default: "cliente" }
})

export default mongoose.model("usuarios", usuarioSchema);
