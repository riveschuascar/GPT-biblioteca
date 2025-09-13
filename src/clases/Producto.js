import IProducto from "./IProducto.js";

class Producto extends IProducto {
  constructor(tipo, nombre) {
    super();
    this._tipo = tipo;
    this._nombre = nombre;
    this._estaDisponible = true;
  }

  set tipo(value) {
    this._tipo = value;
  }

  get tipo() {
    return this._tipo;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get nombre() {
    return this._nombre;
  }

  set estaDisponible(value) {
    this._estaDisponible = value;
  }

  get estaDisponible() {
    return this._estaDisponible;
  }
}

export default Producto;