import { IProducto } from './IProducto.js';

export class Libro extends IProducto {
  constructor(autor, paginas) {
    this.autor = autor;
    this.paginas = paginas;
    this.reservado = false;
  }

  reservar() {
    this.reservado = true;
  }

  estaDisponible() {
    return !this.reservado;
  }

  mostrarInfo() {
    super.mostrarProducto(); // llama al método del padre
    console.log(`Autor: ${this.autor} - Páginas: ${this.paginas}`);
  }
}
