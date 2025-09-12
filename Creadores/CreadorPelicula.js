import { CreadorProducto } from './CreadorProducto.js';
import { Pelicula } from '../Interfaces/Pelicula.js';

export class CreadorPelicula extends CreadorProducto{
    crearProducto(duracion, tipo, titulo){
        return new Pelicula(duracion,tipo,titulo,true);
    }
}