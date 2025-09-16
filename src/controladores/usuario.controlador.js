import usuarioServicio from "../servicios/usuario.servicio.js";

class UsuarioControlador {
  async listar(req, res) {
    try {
      const usuarios = await usuarioServicio.listar();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioServicio.buscarPorId(id);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarPorEmail(req, res) {
    try {
      const { email } = req.params;
      const usuario = await usuarioServicio.buscarPorEmail(email);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async insertar(req, res) {
    try {
      const data = req.body;
      const nuevoUsuario = await usuarioServicio.insertar(data);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const usuarioActualizado = await usuarioServicio.actualizar(id, data);
      if (!usuarioActualizado) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const usuarioEliminado = await usuarioServicio.eliminar(id);
      if (!usuarioEliminado) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UsuarioControlador();
