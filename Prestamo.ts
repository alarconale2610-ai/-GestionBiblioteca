import { Libro } from "./Libro";
import { Usuario } from "./Usuario";

export class Prestamo {
  private libro: Libro;
  private usuario: Usuario;
  private fechaPrestamo: Date;
  private fechaDevolucion: Date | null;
  private activo: boolean;

  constructor(libro: Libro, usuario: Usuario) {
    this.libro = libro;
    this.usuario = usuario;
    this.fechaPrestamo = new Date();
    this.fechaDevolucion = null;
    this.activo = true;
  }

  getLibro(): Libro { return this.libro; }
  getUsuario(): Usuario { return this.usuario; }
  getFechaPrestamo(): Date { return this.fechaPrestamo; }
  isActivo(): boolean { return this.activo; }

  // RF04 – Registrar préstamo
  registrarPrestamo(): void {
    // falta la implementaci
  }

  consultarPrestamos(): void {
    // falta la implementación
  }

  // RF05 – Registrar la devolución de un libro prestado
  registrarDevolucion(): void {
    // falta la implementación
  }

  // RF09 – Validar disponibilidad del libro
  validarDisponibilidadLibro(): boolean {
    // falta la implementación
  }

  eliminarPrestamosDeUsuario(idUsuario: string): void {
    // falta la implementación
  }

  toString(): string {
    return `Préstamo: ${this.libro.getTitulo()} → ${this.usuario.getNombre()} | Fecha: ${this.fechaPrestamo.toLocaleDateString()} | Activo: ${this.activo}`;
  }
}
