import Producto from "./Producto.js";

class Pelicula extends Producto {
  constructor(titulo, director, duracion) {
    super("pelicula", titulo);
    this.director = director;
    this.duracion = duracion;
  }

  mostrarProducto() {
    console.log(`Titulo: ${this.nombre} - Director: ${this.director} - Duracion: ${this.duracion}`);
  }
}

export default Pelicula;