export class CreadorPelicula extends CreadorProducto{
    crearProducto(duracion, tipo, titulo){
        return new Pelicula(duracion,tipo,titulo,true);
    }
}