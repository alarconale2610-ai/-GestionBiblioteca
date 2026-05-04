import { Libro } from "./Libro";

export class Usuario {
  private nombre: string;
  private id: string;

  constructor(nombre: string, id: string) {
    this.nombre = nombre;
    this.id = id;
  }

  
  getNombre(): string { return this.nombre; }
  getId(): string { return this.id; }

 
  buscarPorId(id: string): void {
    // falta la implementación
  }

  eliminarUsuario(id: string): void {
     // falta la implementación
  }

  prestarLibro(libro: Libro): void {
     // falta la implementación
  }

  mostrarLibrosDisponibles(libros: Libro[]): void {
     // falta la implementación
  }

  toString(): string {
    return `Usuario: ${this.nombre} | ID: ${this.id}`;
  }
}