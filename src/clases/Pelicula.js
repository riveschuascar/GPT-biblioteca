import Producto from "./Producto.js";

class Pelicula extends Producto {
  constructor(titulo, director, duracion) {
    super("pelicula");
    this.titulo = titulo;
    this.director = director;
    this.duracion = duracion;
  }

  // TODO implmentar crearDesdeJSON(json) * constructor que recibe un solo json como parametro *

  mostrarProducto() {
    console.log(`Titulo: ${this.titulo} - Director: ${this.director} - Duracion: ${this.duracion}`);
  }
}

export default Pelicula;
