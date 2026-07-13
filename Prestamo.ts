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

  public getLibro(): Libro {
    return this.libro;
  }

  public getUsuario(): Usuario {
    return this.usuario;
  }

  public getFechaPrestamo(): Date {
    return this.fechaPrestamo;
  }

  public getFechaDevolucion(): Date | null {
    return this.fechaDevolucion;
  }

  public isActivo(): boolean {
    return this.activo;
  }

  public registrarDevolucion(): void {
    this.activo = false;
    this.fechaDevolucion = new Date();
  }
}
