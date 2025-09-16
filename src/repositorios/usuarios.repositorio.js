import usuarioModelo from "../modelos/usuario.modelo.js";

const modelo = usuarioModelo;

class UsuarioRepositorio {
  listar() {
    return modelo.find();
  }

  buscarPorId(id) {
    return modelo.findById(id);
  }

  buscarPorEmail(email) {
    return modelo.findOne(email);
  }

  insertar(data) {
    return modelo.insertOne(data);
  }

  actualizar(id, data) {
    return modelo.findByIdAndUpdate(id, data);
  }

  eliminar(id) {
    return modelo.findByIdAndDelete(id);
  }
}

export default new UsuarioRepositorio();
