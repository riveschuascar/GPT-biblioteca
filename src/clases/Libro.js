import Producto from "./Producto.js";

class Libro extends Producto {
  constructor(titulo, autor, paginas) {
    super("libro", titulo);
    this.autor = autor;
    this.paginas = paginas;
  }

  mostrarProducto() {
    console.log(`Titulo: ${this.nombre} - Autor: ${this.autor} - Páginas: ${this.paginas}`);
  }
}

export default Libro;