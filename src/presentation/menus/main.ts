import { LibroService } from "../../core/services/LibroService";
import { UsuarioService } from "../../core/services/UsuarioService";
import { PrestamoService } from "../../core/services/PrestamoService";

function seccion(titulo: string): void {
  const ancho = Math.max(44, titulo.length + 4);
  const linea = "─".repeat(ancho);
  console.log(`\n┌${linea}┐`);
  console.log(`│ ${titulo.padEnd(ancho - 1)}│`);
  console.log(`└${linea}┘`);
}

function paso(numero: number, texto: string): void {
  console.log(`\n[${numero}] ${texto}`);
}

const libroService = new LibroService();
const usuarioService = new UsuarioService();
const prestamoService = new PrestamoService();

console.log("╔════════════════════════════════════════╗");
console.log("║   SISTEMA DE BIBLIOTECA - Demo Consola  ║");
console.log("╚════════════════════════════════════════╝");

// 1. Agregar libros
paso(1, "Registrando libros...");
const libro1 = libroService.agregarLibro("Clean Code", "Robert C. Martin", "978-0132350884", 2);
const libro2 = libroService.agregarLibro("Design Patterns", "GoF", "978-0201633610", 1);

// 2. Registrar usuarios
paso(2, "Registrando usuarios...");
const usuario1 = usuarioService.registrarUsuario("Alexander Zambrano");
const usuario2 = usuarioService.registrarUsuario("María Pérez");

seccion("Usuarios registrados");
usuarioService.mostrarUsuarios();

seccion("Disponibilidad inicial de libros");
libroService.mostrarDisponibles();

// 3. Realizar préstamos
paso(3, "Registrando préstamos...");
usuarioService.prestarLibro(usuario1, libro1);
usuarioService.prestarLibro(usuario2, libro2);

seccion("Disponibilidad de libros tras los préstamos");
libroService.mostrarDisponibles();

seccion("Préstamos activos");
prestamoService.consultarPrestamos().forEach((p) =>
  console.log(`  ${p.getUsuario().getNombre()} → "${p.getLibro().getTitulo()}" | Activo: ${p.isActivo()}`)
);

// 4. Registrar una devolución
paso(4, "Registrando devolución de 'Clean Code'...");
prestamoService.registrarDevolucion(libro1, usuario1);

seccion("Disponibilidad de libros tras la devolución");
libroService.mostrarDisponibles();

// 5. Validar disponibilidad puntual
paso(5, "Validando disponibilidad de 'Design Patterns'...");
console.log(`  ¿Disponible? ${libroService.validarDisponibilidad(libro2.getIsbn())}`);

// 6. Eliminar un usuario (y sus préstamos asociados)
seccion("Usuarios antes de la eliminación");
usuarioService.mostrarUsuarios();

paso(6, `Eliminando usuario ${usuario2.getNombre()} (ID: ${usuario2.getId()})...`);
usuarioService.eliminarUsuario(usuario2.getId());

seccion("Usuarios después de la eliminación");
usuarioService.mostrarUsuarios();

seccion("Préstamos después de la eliminación del usuario");
const prestamosRestantes = prestamoService.consultarPrestamos();
if (prestamosRestantes.length === 0) {
  console.log("  (No quedan préstamos registrados)");
} else {
  prestamosRestantes.forEach((p) =>
    console.log(`  ${p.getUsuario().getNombre()} → "${p.getLibro().getTitulo()}" | Activo: ${p.isActivo()}`)
  );
}

console.log("\n╔════════════════════════════════════════╗");
console.log("║              Fin de la demo             ║");
console.log("╚════════════════════════════════════════╝\n");
