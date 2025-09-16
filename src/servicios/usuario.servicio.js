import usuarioRepositorio from "../repositorios/usuarios.repositorio.js";

class UsuarioServicio {
  repositorio = usuarioRepositorio;
  
  listar() {
    return this.repositorio.listar();
  }

  buscarPorId(id) {
    return this.repositorio.buscarPorId(id);
  }

  buscarPorEmail(email) {
    return this.repositorio.buscarPorEmail({ email: email });
  }

  insertar(data) {
    return this.repositorio.insertar(data);
  }

  actualizar(id, data) {
    return this.repositorio.actualizar(id, data);
  }

  eliminar(id) {
    return this.repositorio.eliminar(id);
  }
}

export default new UsuarioServicio();
