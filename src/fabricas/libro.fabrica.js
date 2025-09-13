import ProductoFabrica from "./iproducto.fabrica.js";
import Libro from "../clases/Libro.js";

class LibroFabrica extends ProductoFabrica {
  crearProducto(titulo, autor, isb, paginas) {
    return new Libro(titulo, autor, isb, paginas)
  }
}

export default LibroFabrica;