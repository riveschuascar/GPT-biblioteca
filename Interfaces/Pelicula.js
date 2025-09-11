import { IProducto } from '../InterfacesIProducto.js';

export class Pelicula extends IProducto{
    constructor(titulo, tipo, duracion, disponible){
        super();
        this.titulo = titulo;
        this.tipo = tipo;
        this.duracion = duracion;
        this.disponible = disponible;
    }

    estaDisponible(){
        return this.disponible;
    }
}