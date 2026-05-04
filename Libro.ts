export class Libro {
  private titulo: string;
  private autor: string;
  private isbn: string;
  private cantidadDisponible: number;

  constructor(
    titulo: string,
    autor: string,
    isbn: string,
    cantidadDisponible: number
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.cantidadDisponible = cantidadDisponible;
  }


  getTitulo(): string { return this.titulo; }
  getAutor(): string { return this.autor; }
  getIsbn(): string { return this.isbn; }
  getCantidadDisponible(): number { return this.cantidadDisponible; }
  setCantidadDisponible(cantidad: number): void { this.cantidadDisponible = cantidad; }


  agregarLibro(): void {
    // falta la implementación
  }

  
  eliminarLibro(isbn: string): void {
    // falta la implementación
  }

  
  buscarPorTitulo(titulo: string): void {
    // falta la implementación
  }

  mostrarDisponibles(): void {
    // falta la implementación
  }

 
  validarDisponibilidad(): boolean {
    // pendiente de implementación
    return false; 
  }

  toString(): string {
    return `[${this.isbn}] ${this.titulo} - ${this.autor} | Disponibles: ${this.cantidadDisponible}`;
  }
}