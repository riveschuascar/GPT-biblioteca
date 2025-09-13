class ProductoFabrica {
  crearProducto() {
    throw new Error("ProductoFabrica es una interfaz abstracta, no se puede instanciar directamente");
  }
}

export default ProductoFabrica;