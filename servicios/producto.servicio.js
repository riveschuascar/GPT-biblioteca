const productoRepositorio = require("../repositorios/producto.repositorio");
const libroCreador = require("../creadores/libro.creador");
const peliculaCreador = require("../creadores/pelicula.creador");
const laptopCreador = require("../creadores/laptop.creador");

class ProductoServicio {
  instanciarRecurso(data) {
    switch (data.tipo) {
      case "libro":
        producto = libroCreador.crearProducto(data);
      case "pelicula":
        producto = peliculaCreador.crearProducto(data);
      case "laptop":
        producto = laptopCreador.crearProducto(data);
      default:
        throw new Error("Tipo de producto no soportado");
    }
  }

  async crearProducto(data) {
    const producto = this.instanciarRecurso(data);
    return await productoRepositorio.crear(producto, data.tipo);
  }

  async obtenerLibro(id) {
    const libro = await productoRepositorio.buscarPorId(id);
    if (!libro) throw new Error("Libro no encontrado");
    return libro;
  }

  async reservarLibro(id) {
    const libro = await productoRepositorio.buscarPorId(id);
    if (!libro) throw new Error("Libro no encontrado");
    if (libro.reservado) throw new Error("Libro ya reservado");

    libro.reservado = true;
    return await libro.save();
  }
}

module.exports = new ProductoServicio();
