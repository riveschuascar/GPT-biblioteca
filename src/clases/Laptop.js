import Producto from "./Producto.js";

class Laptop extends Producto {
  constructor(modelo, cpu, ram) {
    super("laptop", modelo);
    this.cpu = cpu;
    this.ram = ram;
  }

  mostrarProducto() {
    console.log(`Modelo: ${this.nombre} - CPU: ${this.procesador} - RAM: ${this.ram}`);
  }
}

export default Laptop;