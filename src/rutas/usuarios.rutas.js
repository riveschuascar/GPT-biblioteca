import express from "express";
import usuarioControlador from "../controladores/usuario.controlador.js";

const routerUsuarios = express.Router();
const controlador = usuarioControlador;

routerUsuarios.get("/", (req, res) => controlador.listar(req, res));

routerUsuarios.get("/:id", (req, res) => controlador.buscarPorId(req, res));

routerUsuarios.get("/email/:email", (req, res) => controlador.buscarPorEmail(req, res));

routerUsuarios.post("/", (req, res) => controlador.insertar(req, res));

routerUsuarios.put("/:id", (req, res) => controlador.actualizar(req, res));

routerUsuarios.delete("/:id", (req, res) => controlador.eliminar(req, res));

export default routerUsuarios;
