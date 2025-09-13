import Producto from "./Producto.js";

class Libro extends Producto {
  constructor(titulo, autor, isb, paginas) {
    super("libro", titulo);
    this._autor = autor;
    this._isb = isb;
    this._paginas = paginas;
  }

  set autor(value) {
    this._autor = value;
  }

  get autor() {
    return this._autor;
  }

  set isb(value) {
    this._isb = value;
  }

  get isb() {
    return this._isb;
  }

  set paginas(value) {
    this._paginas = value;
  }

  get paginas() {
    return this._paginas;
  }

  mostrarProducto() {
    console.log(`Titulo: ${this.nombre} - Autor: ${this.autor} - Páginas: ${this.paginas}`);
  }
}

export default Libro;