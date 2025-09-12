import IProducto from './IProducto.js';

export class Pelicula extends IProducto{
    constructor(titulo, tipo, duracion, disponible){
        this.titulo = titulo;
        this.tipo = tipo;
        this.duracion = duracion;
        this.disponible = disponible;
    }

    estaDisponible(){
        return this.disponible;
    }
}