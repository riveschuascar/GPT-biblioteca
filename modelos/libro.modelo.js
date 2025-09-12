const mongoose = require("mongoose");

const LibroSchema = new mongoose.Schema({
  isb: String,
  titulo: String,
  autor: String,
  fechaPublicacion: Date,
  reservado: { type: Boolean, default: false }
});

export default mongoose.model("libro", LibroSchema);