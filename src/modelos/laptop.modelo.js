import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  cpu: { type: String, required: true },
  ram: { type: String, required: true },
  tipo: { type: String, default: "laptop" },
  estaDisponible: { type: Boolean, default: true }
});

export default mongoose.model("laptops", laptopSchema);
