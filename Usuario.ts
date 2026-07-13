export class Usuario {
  private nombre: string;
  private id: string;

  constructor(nombre: string, id: string) {
    this.nombre = nombre;
    this.id = id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getId(): string {
    return this.id;
  }
}
