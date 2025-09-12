import { IProducto } from './IProducto.js';

export class Laptop extends IProducto {
  constructor(procesador, ram) {
    this.procesador = procesador;
    this.ram = ram;
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
