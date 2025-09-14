import IProducto from "./Producto.interfaz.js";

class Producto extends IProducto {
  constructor(tipo) {
    super();
    this.tipo = tipo;
    this.estaDisponible = true;
  }
}

export default Producto;
