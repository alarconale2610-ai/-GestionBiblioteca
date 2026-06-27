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
    Libro.libros.push(this);
    console:log("libro agreagado correctamente");
    //
  }

  
  eliminarLibro(isbn: string): void {
    const indice = Libro.libros.findIndex(
      libro => libro.getIsbn() === isbn
      );
    if (indice !== -1) {
      Libro.libros.splice(indice, 1);
      console.log("Libro eliminado correctamente.");
    } else {
      console.log("Libro no encontrado.");
    }
      
    // 
  }

  
  buscarPorTitulo(titulo: string): void {
     const libro = Libro.libros.find(
    l => l.getTitulo().toLowerCase() === titulo.toLowerCase()
  );

  if (libro) {
    console.log(libro.toString());
  } else {
    console.log("Libro no encontrado.");
  }

    // 
  }

  mostrarDisponibles(): void {
    const disponibless = Libros.libros.filter(
       libro => libro.getCantidadDisponible() > 0
  );

  if (disponibles.length > 0) {
    disponibles.forEach(libro => console.log(libro.toString()));
  } else {
    console.log("No hay libros disponibles.");
  }
    // 
  }

 
  validarDisponibilidad(): boolean {
    return this.cantidadDisponible > 0;
}
    // 
    return false; 
  }

  toString(): string {
    return `[${this.isbn}] ${this.titulo} - ${this.autor} | Disponibles: ${this.cantidadDisponible}`;
  }
}
