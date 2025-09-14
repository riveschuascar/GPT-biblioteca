import express from "express";
import routerProductos from "./rutas/productos.rutas.js";

const app = express();

app.use(express.json());

// Rutas base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Aquí montas las rutas de productos
app.use("/api/productos", routerProductos);

export default app;
