import Producto from "./Producto.js";

class Laptop extends Producto {
  constructor(modelo, cpu, ram) {
    super("laptop", modelo);
    this._cpu = cpu;
    this._ram = ram;
  }

  set cpu(value) {
    this._cpu = value;
  }

  get cpu() {
    return this._cpu;
  }

  set ram(value) {
    this._ram = value;
  }

  get ram() {
    return this._ram;
  }

  mostrarProducto() {
    console.log(`Modelo: ${this.nombre} - CPU: ${this.cpu} - RAM: ${this.ram}`);
  }
}

export default Laptop;