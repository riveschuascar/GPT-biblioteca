import { CreadorProducto } from './CreadorProducto.js';
import { Laptop } from 'Laptop.js';

export class CredorLaptop extends CreadorProducto {
  crearProducto() {
    // Aquí puedes decidir qué datos pasarle
    return new Libro("Asus", "Core i3", "8 GB", new Date(1943, 3, 6));
  }
}