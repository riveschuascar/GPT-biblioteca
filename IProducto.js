export class IProducto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarProducto() {
    console.log(`${this.nombre} - Precio: $${this.precio}`);
  }
}
