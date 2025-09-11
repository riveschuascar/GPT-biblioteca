import { IProducto } from '../InterfacesIProducto.js';

export class Libro extends IProducto {
  constructor(marca, procesador, ram) {
    super(marca, marca); // Llama al constructor de IProducto
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
