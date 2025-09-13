import IProducto from "./IProducto.js";

class Producto extends IProducto {
  constructor(tipo, nombre) {
    this._tipo = tipo;
    this.nombre = nombre;
    this._estaDisponible = true;
  }

  set tipo(value) {
    this._tipo = value;
  }

  get tipo() {
    return this._tipo;
  }

  set estaDisponible(value) {
    this._estaDisponible = value;
  }

  get estaDisponible() {
    return this._estaDisponible;
  }
}

export default Producto;