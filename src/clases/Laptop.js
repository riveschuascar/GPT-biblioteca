import Producto from "./Producto.js";

class Laptop extends Producto {
  constructor(modelo, cpu, ram) {
    super("laptop");
    this.modelo = modelo;
    this.cpu = cpu;
    this.ram = ram;
  }

  // TODO implmentar crearDesdeJSON(json) * constructor que recibe un solo json como parametro *

  mostrarProducto() {
    console.log(`Modelo: ${this.modelo} - CPU: ${this.cpu} - RAM: ${this.ram}`);
  }
}

export default Laptop;
