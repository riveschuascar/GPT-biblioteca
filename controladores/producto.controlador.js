const productoServicio = require("../servicios/producto.servicio");
const Libro = require("../modelos/libro.modelo");

class ProductoControlador {
  async crearProducto(req, res) {
    try {
      const recurso = await productoServicio.crearLibro(req.body);
      res.status(201).json(recurso);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProductoControlador();
