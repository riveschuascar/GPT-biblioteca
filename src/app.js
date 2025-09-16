import express from "express";
import routerProductos from "./rutas/productos.rutas.js";
import routerUsuarios from "./rutas/usuarios.rutas.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// Rutas base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Aquí montas las rutas de productos
app.use("/productos", routerProductos);

app.use("/usuarios", routerUsuarios);

export default app;
