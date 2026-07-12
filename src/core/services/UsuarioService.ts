import { Usuario } from "../entities/Usuario";
import { Libro } from "../entities/Libro";
import { DataContext } from "../../data/repositories/DataContext";
import { BibliotecaFactory } from "./BibliotecaFactory";
import { PrestamoService } from "./PrestamoService";

export class UsuarioService {
  private contexto = DataContext.getInstance();
  private prestamoService = new PrestamoService();

  public registrarUsuario(nombre: string): Usuario {
    const usuario = BibliotecaFactory.crearUsuario(nombre);
    this.contexto.getUsuarios().push(usuario);
    console.log(`Usuario registrado: ${usuario.getNombre()} (ID: ${usuario.getId()})`);
    return usuario;
  }

  public buscarPorId(id: string): Usuario | undefined {
    return this.contexto.getUsuarios().find((u) => u.getId() === id);
  }

  public eliminarUsuario(id: string): boolean {
    const usuarios = this.contexto.getUsuarios();
    const index = usuarios.findIndex((u) => u.getId() === id);
    if (index === -1) {
      console.log(`No se encontró un usuario con ID ${id}.`);
      return false;
    }
    this.prestamoService.eliminarPrestamosDeUsuario(id);
    usuarios.splice(index, 1);
    console.log(`Usuario con ID ${id} eliminado.`);
    return true;
  }

  public prestarLibro(usuario: Usuario, libro: Libro): void {
    this.prestamoService.registrarPrestamo(usuario, libro);
  }

  public mostrarLibrosDisponibles(libros: Libro[]): void {
    console.log(`--- Libros disponibles (${libros.length}) ---`);
    libros.forEach((l) => console.log(`${l.getTitulo()} (${l.getCantidadDisponible()} disp.)`));
  }

  public mostrarUsuarios(): void {
    const usuarios = this.contexto.getUsuarios();
    if (usuarios.length === 0) {
      console.log("(No hay usuarios registrados)");
      return;
    }
    usuarios.forEach((u) => console.log(`  [${u.getId()}] ${u.getNombre()}`));
  }
}
