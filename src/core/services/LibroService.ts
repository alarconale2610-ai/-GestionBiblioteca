import { Libro } from "../entities/Libro";
import { DataContext } from "../../data/repositories/DataContext";
import { BibliotecaFactory } from "./BibliotecaFactory";

export class LibroService {
  private contexto = DataContext.getInstance();

  public agregarLibro(titulo: string, autor: string, isbn: string, cantidad: number): Libro {
    const libro = BibliotecaFactory.crearLibro(titulo, autor, isbn, cantidad);
    this.contexto.getLibros().push(libro);
    console.log(`Libro agregado: "${libro.getTitulo()}" (ISBN: ${libro.getIsbn()})`);
    return libro;
  }

  public eliminarLibro(isbn: string): boolean {
    const libros = this.contexto.getLibros();
    const index = libros.findIndex((l) => l.getIsbn() === isbn);
    if (index === -1) {
      console.log(`No se encontró un libro con ISBN ${isbn}.`);
      return false;
    }
    libros.splice(index, 1);
    console.log(`Libro con ISBN ${isbn} eliminado.`);
    return true;
  }

  public buscarPorTitulo(titulo: string): Libro[] {
    return this.contexto
      .getLibros()
      .filter((l) => l.getTitulo().toLowerCase().includes(titulo.toLowerCase()));
  }

  public mostrarDisponibles(): void {
    const disponibles = this.contexto.getLibros().filter((l) => l.getCantidadDisponible() > 0);
    console.log("--- Libros disponibles ---");
    disponibles.forEach((l) =>
      console.log(`${l.getTitulo()} - ${l.getAutor()} (${l.getCantidadDisponible()} disponibles)`)
    );
  }

  public validarDisponibilidad(isbn: string): boolean {
    const libro = this.contexto.getLibros().find((l) => l.getIsbn() === isbn);
    return libro ? libro.getCantidadDisponible() > 0 : false;
  }
}
