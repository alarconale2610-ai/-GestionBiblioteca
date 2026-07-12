import { Libro } from "../../core/entities/Libro";
import { Usuario } from "../../core/entities/Usuario";
import { Prestamo } from "../../core/entities/Prestamo";

/**
 * DataContext implementa el patrón Singleton.
 * Constructor privado + método estático de acceso (getInstance).
 * Contiene los arreglos que simulan las "tablas" de la base de datos.
 */
export class DataContext {
  private static instance: DataContext;

  private libros: Libro[] = [];
  private usuarios: Usuario[] = [];
  private prestamos: Prestamo[] = [];

  private constructor() {}

  public static getInstance(): DataContext {
    if (!DataContext.instance) {
      DataContext.instance = new DataContext();
    }
    return DataContext.instance;
  }

  public getLibros(): Libro[] {
    return this.libros;
  }

  public getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  public getPrestamos(): Prestamo[] {
    return this.prestamos;
  }
}
