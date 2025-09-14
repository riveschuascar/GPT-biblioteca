import Producto from "./Producto.js";

class Pelicula extends Producto {
  constructor(titulo, director, duracion) {
    super("pelicula", titulo);
    this._director = director;
    this._duracion = duracion;
  }

  set director(value) {
    this._director = value;
  }

  get director() {
    return this._director;
  }

  set duracion(value) {
    this._duracion = value;
  }

  get duracion() {
    return this._duracion;
  }

  mostrarProducto() {
    console.log(`Titulo: ${this.nombre} - Director: ${this.director} - Duracion: ${this.duracion}`);
  }
}

export default Pelicula;
