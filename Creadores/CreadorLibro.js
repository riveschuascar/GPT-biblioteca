import { CreadorProducto } from './CreadorProducto.js';
import { Libro } from 'Libro.js';

export class CreadorLibro extends CreadorProducto {
  crearProducto() {
    // Aquí puedes decidir qué datos pasarle
    return new Libro("12345", "El Principito", "Antoine de Saint-Exupéry", new Date(1943, 3, 6));
  }
}
