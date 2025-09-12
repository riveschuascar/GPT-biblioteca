const Libro = require("../modelos/libro.modelo");
const Pelicula = require("../modelos/pelicula.modelo");
const Laptop = require("../modelos/laptop.modelo");

class ProductoRepositorio {
  async crear(data, tipo) {
    switch (tipo) {
      case "libro":
        return await Libro.create(data);
      case "pelicula":
        return await Pelicula.create(data);
      case "laptop":
        return await Laptop.create(data);
    }
  }

  async buscarPorId(id, tipo) {
    switch (tipo) {
      case "libro":
        return await Libro.findById(id);
      case "pelicula":
        return await Pelicula.findById(id);
      case "laptop":
        return await Laptop.findById(id);
    }
  }

  async listar(tipo) {
    switch (tipo) {
      case "libro":
        return await Libro.find();
      case "pelicula":
        return await Pelicula.find();
      case "laptop":
        return await Laptop.find();
    }
  }

  async actualizar(id, data, tipo) {
    switch (tipo) {
      case "libro":
        return await Libro.findByIdAndUpdate(id, data, { new: true });
      case "pelicula":
        return await Pelicula.findByIdAndUpdate(id, data, { new: true });
      case "laptop":
        return await Laptop.findByIdAndUpdate(id, data, { new: true });
    }
  }

  async eliminar(id, tipo) {
    switch (tipo) {
      case "libro":
        return await Libro.findByIdAndDelete(id);
      case "pelicula":
        return await Pelicula.findByIdAndDelete(id);
      case "laptop":
        return await Laptop.findByIdAndDelete(id);
    }
  }
}

module.exports = new ProductoRepositorio();
