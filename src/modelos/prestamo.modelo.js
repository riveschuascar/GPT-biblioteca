import mongoose from "mongoose";

const prestamoSchema = new mongoose.Schema({
  usuarioPrestamo: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" },
    nombre: String,
    email: String
  },
  productoPrestado: { type: mongoose.Schema.Types.Mixed, required: true },
  fechaPrestamo: { type: Date, default: Date.now },
  fechaDevolver: { type: Date },
});

export default mongoose.model("prestamos", prestamoSchema);
