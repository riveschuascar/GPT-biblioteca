import express from "express";
import productoControlador from "../controladores/producto.controlador.js";

const routerProductos = express.Router();
const controlador = productoControlador;

routerProductos.post("/", (req, res) => controlador.insertar(req, res));

routerProductos.get("/:id", (req, res) => controlador.buscarPorId(req, res));

routerProductos.put("/:id", (req, res) => controlador.actualizar(req, res));

routerProductos.delete("/:id", (req, res) => controlador.eliminar(req, res));

export default routerProductos;
