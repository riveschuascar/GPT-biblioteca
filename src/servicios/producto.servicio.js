import productosRepositorio from "../repositorios/productos.repositorio.js";
import LibroFabrica from "../fabricas/libro.fabrica.js";
import PeliculaFabrica from "../fabricas/pelicula.fabrica.js";
import LaptopFabrica from "../fabricas/laptop.fabrica.js";

class ProductoServicio {
  repositorio = productosRepositorio;

  instanciarProducto(data) {
    switch (data.tipo) {
      case "libro":
        return LibroFabrica.crearProducto(data);
      case "pelicula":
        return PeliculaFabrica.crearProducto(data);
      case "laptop":
        return LaptopFabrica.crearProducto(data);
      default:
        throw new Error("No es un tipo valido");
    }
  }

  buscarPorId(id, data) {
    const producto = this.instanciarProducto(data);
    return this.repositorio.buscarPorId(id, producto);
  }

  insertar(data) {
    const producto = this.instanciarProducto(data);
    return this.repositorio.insertar(producto);
  }

  actualizar(id, data) {
    const producto = this.instanciarProducto(data);
    return this.repositorio.actualizar(id, producto);
  }

  eliminar(id) {
    return this.repositorio.eliminar(id);
  }
}

export default new ProductoServicio();
