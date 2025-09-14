import productoServicio from "../servicios/producto.servicio.js";

class ProductoControlador {
  servicio = productoServicio;

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const producto = await this.servicio.buscarPorId(id);
      if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async insertar(req, res) {
    try {
      const data = req.body;
      console.log(data);
      const producto = await this.servicio.insertar(data);
      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const producto = await this.servicio.actualizar(id, data);
      if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
      res.json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const producto = await this.servicio.eliminar(id);
      if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
      res.json({ mensaje: "Producto eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductoControlador();
