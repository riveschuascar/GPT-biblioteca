export class Prestamo {
  constructor(usuarioPrestamo, productoPrestado, fechaDevolver) {
    this.usuarioPrestamo = usuarioPrestamo;         // instancia de Usuario
    this.productoPrestado = productoPrestado;       // instancia de IProducto (ej: Libro)
    this.fechaPrestamo = new Date();                // ahora
    this.fechaDevolver = fechaDevolver;             // fecha futura
  }

  mostrarInfo() {
    console.log(`Prestamo de ${this.productoPrestado.titulo} a ${this.usuarioPrestamo.nombre}`);
    console.log(`Desde: ${this.fechaPrestamo.toLocaleDateString()}`);
    console.log(`Hasta: ${this.fechaDevolver.toLocaleDateString()}`);
  }
}
