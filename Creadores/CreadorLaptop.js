import { CreadorProducto } from './CreadorProducto.js';
import { Laptop } from '../Interfaces/Laptop.js';

export class CredorLaptop extends CreadorProducto {
  crearProducto() {
    return new Laptop('Intel i7', '16GB');
  }
}