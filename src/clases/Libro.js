import Producto from "./Producto.js";

class Libro extends Producto {
  constructor(titulo, autor, isb, paginas) {
    super("libro");
    this.titulo = titulo;
    this.autor = autor;
    this.isb = isb;
    this.paginas = paginas;
  }

  // TODO implmentar crearDesdeJSON(json) * constructor que recibe un solo json como parametro *
  
  mostrarProducto() {
    console.log(`Titulo: ${this.titulo} - Autor: ${this.autor} - Páginas: ${this.paginas}`);
  }
}

export default Libro;
