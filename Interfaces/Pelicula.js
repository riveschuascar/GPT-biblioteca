class Pelicula extends IProducto{
    constructor(duracion, tipo, titulo){
        super();
        this.duracion = duracion;
        this.tipo = tipo;
        this.duracion = duracion;
    }

    estaDisponible(){
        console.log("Pelicula disponible")
    }
}