export class Usuario {
  constructor(nombre, email, password, tipoUsuario) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.tipoUsuario = tipoUsuario;
  }

  hacerReserva(producto) {
    if (producto.estaDisponible()) {
      producto.reservar();
      console.log(`${this.nombre} reservó el producto "${producto.titulo}"`);
    } else {
      console.log(`El producto "${producto.titulo}" no está disponible`);
    }
  }
}
