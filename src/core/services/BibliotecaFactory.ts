import { Libro } from "../entities/Libro";
import { Usuario } from "../entities/Usuario";
import { Prestamo } from "../entities/Prestamo";
import { DataContext } from "../../data/repositories/DataContext";

/**
 * BibliotecaFactory centraliza la creación de entidades:
 * valida los datos de entrada y genera identificadores.
 */
export class BibliotecaFactory {
  private static contadorUsuarios = 0;

  public static crearLibro(titulo: string, autor: string, isbn: string, cantidad: number): Libro {
    if (!titulo || !autor || !isbn) {
      throw new Error("Datos incompletos para crear el libro.");
    }
    if (cantidad < 0) {
      throw new Error("La cantidad disponible no puede ser negativa.");
    }
    const contexto = DataContext.getInstance();
    const existente = contexto.getLibros().find((l) => l.getIsbn() === isbn);
    if (existente) {
      throw new Error(`Ya existe un libro con ISBN ${isbn}.`);
    }
    return new Libro(titulo, autor, isbn, cantidad);
  }

  public static crearUsuario(nombre: string): Usuario {
    if (!nombre) {
      throw new Error("El nombre del usuario es obligatorio.");
    }
    BibliotecaFactory.contadorUsuarios++;
    const id = `U${BibliotecaFactory.contadorUsuarios.toString().padStart(3, "0")}`;
    return new Usuario(nombre, id);
  }

  public static crearPrestamo(libro: Libro, usuario: Usuario): Prestamo {
    if (libro.getCantidadDisponible() <= 0) {
      throw new Error(`No hay ejemplares disponibles de "${libro.getTitulo()}".`);
    }
    return new Prestamo(libro, usuario);
  }
}
