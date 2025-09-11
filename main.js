import { Usuario } from './Usuario.js';
import { Prestamo } from './Prestamo.js';
import { Libro } from 'Libro.js';

const usuario1 = new Usuario("Carlos", "carlos@mail.com", "1234", "lector");

// Crear libro
const libro1 = new Libro("12345", "El Principito", "Antoine de Saint-Exupéry", new Date(1943, 3, 6));

// Usuario hace reserva
usuario1.hacerReserva(libro1);

// Crear préstamo
if (!libro1.estaDisponible()) {
  const fechaDevolver = new Date();
  fechaDevolver.setDate(fechaDevolver.getDate() + 7); // devolver en 7 días

  const prestamo1 = new Prestamo(usuario1, libro1, fechaDevolver);
  prestamo1.mostrarInfo();
}