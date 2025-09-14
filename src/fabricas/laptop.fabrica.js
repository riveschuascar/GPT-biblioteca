import ProductoFabrica from './iproducto.fabrica.js';
import Laptop from '../clases/Laptop.js';

class LaptopFabrica extends ProductoFabrica {
  crearProducto(modelo, cpu, ram) {
    return new Laptop(modelo, cpu, ram);
  }
}

export default new LaptopFabrica();
