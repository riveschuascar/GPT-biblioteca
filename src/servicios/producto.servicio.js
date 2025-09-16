import productosRepositorio from "../repositorios/productos.repositorio.js";
import LibroFabrica from "../fabricas/libro.fabrica.js";
import PeliculaFabrica from "../fabricas/pelicula.fabrica.js";
import LaptopFabrica from "../fabricas/laptop.fabrica.js";

class ProductoServicio {
  repositorio = productosRepositorio;

  instanciarProducto(data) {
    switch (data.tipo) {
      case "libro":
        return LibroFabrica.crearProducto(data.titulo, data.autor, data.isb, data.paginas);
      case "pelicula":
        return PeliculaFabrica.crearProducto(data.titulo, data.director, data.duracion);
      case "laptop":
        return LaptopFabrica.crearProducto(data.modelo, data.cpu, data.ram);
      default:
        throw new Error(`${data.tipo}: no es un tipo valido`)
    }
  }

  buscarPorId(id, tipo) {
  return this.repositorio.buscarPorId(id, tipo);
}

  insertar(data) {
    const producto = this.instanciarProducto(data);
    return this.repositorio.insertar(producto);
  }

  actualizar(id, data) {
    const producto = this.instanciarProducto(data);
    return this.repositorio.actualizar(id, producto);
  }

  eliminar(id, tipo) {
    return this.repositorio.eliminar(id, tipo);
  }
}

export default new ProductoServicio();
