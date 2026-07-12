import { Usuario } from "../entities/Usuario";
import { Libro } from "../entities/Libro";
import { Prestamo } from "../entities/Prestamo";
import { DataContext } from "../../data/repositories/DataContext";
import { BibliotecaFactory } from "./BibliotecaFactory";

export class PrestamoService {
  private contexto = DataContext.getInstance();

  public registrarPrestamo(usuario: Usuario, libro: Libro): Prestamo {
    const prestamo = BibliotecaFactory.crearPrestamo(libro, usuario);
    libro.setCantidadDisponible(libro.getCantidadDisponible() - 1);
    this.contexto.getPrestamos().push(prestamo);
    console.log(`Préstamo registrado: "${libro.getTitulo()}" a ${usuario.getNombre()}`);
    return prestamo;
  }

  public consultarPrestamos(): Prestamo[] {
    return this.contexto.getPrestamos();
  }

  public registrarDevolucion(libro: Libro, usuario: Usuario): boolean {
    const prestamo = this.contexto
      .getPrestamos()
      .find(
        (p) =>
          p.getLibro().getIsbn() === libro.getIsbn() &&
          p.getUsuario().getId() === usuario.getId() &&
          p.isActivo()
      );
    if (!prestamo) {
      console.log("No se encontró un préstamo activo con esos datos.");
      return false;
    }
    prestamo.registrarDevolucion();
    libro.setCantidadDisponible(libro.getCantidadDisponible() + 1);
    console.log(`Devolución registrada: "${libro.getTitulo()}" por ${usuario.getNombre()}`);
    return true;
  }

  public eliminarPrestamosDeUsuario(idUsuario: string): void {
    const prestamos = this.contexto.getPrestamos();
    for (let i = prestamos.length - 1; i >= 0; i--) {
      if (prestamos[i].getUsuario().getId() === idUsuario) {
        prestamos.splice(i, 1);
      }
    }
  }
}
