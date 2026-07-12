export class Libro {
  private titulo: string;
  private autor: string;
  private isbn: string;
  private cantidadDisponible: number;

  constructor(titulo: string, autor: string, isbn: string, cantidadDisponible: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.cantidadDisponible = cantidadDisponible;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getAutor(): string {
    return this.autor;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getCantidadDisponible(): number {
    return this.cantidadDisponible;
  }

  public setCantidadDisponible(cantidad: number): void {
    this.cantidadDisponible = cantidad;
  }
}
