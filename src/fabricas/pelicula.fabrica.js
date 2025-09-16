import ProductoFabrica from "./iproducto.fabrica.js";
import Pelicula from "../clases/Pelicula.js";

class PeliculaFabrica extends ProductoFabrica {
  crearProducto(titulo, director, duracion) {
    return new Pelicula(titulo, director, duracion);
  }
}

export default new PeliculaFabrica();
