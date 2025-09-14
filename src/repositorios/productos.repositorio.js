import libroModelo from "../modelos/libro.modelo.js";
import peliculaModelo from "../modelos/pelicula.modelo.js";
import laptopModelo from "../modelos/laptop.modelo.js";

class ProductoRepositorio {
  obtenerModelo(tipo) {
    switch (tipo) {
      case "libro":
        return libroModelo;
      case "pelicula":
        return peliculaModelo;
      case "laptop":
        return laptopModelo;
      default:
        throw new Error("No es un tipo valido")
    }
  }

  buscarPorId(id, tipo) {
    const modeloDocumento = this.obtenerModelo(tipo);
    return modeloDocumento.findById(id);
  }

  insertar(data) {
    const modeloDocumento = this.obtenerModelo(tipo);
    return modeloDocumento.insertOne(data);
  }

  actualizar(id, data) {
    const modeloDocumento = this.obtenerModelo(tipo);
    return modeloDocumento.findByIdAndUpdate(id, data);
  }

  eliminar(id) {
    const modeloDocumento = this.obtenerModelo(tipo);
    return modeloDocumento.findByIdAndDelete(id);
  }
}

export default new ProductoRepositorio();
