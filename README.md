# Sistema de Gestión de Biblioteca

Proyecto académico de consola en **TypeScript** que implementa una **Arquitectura en Capas** junto con los patrones de diseño **Singleton** y **Factory**, simulando una base de datos en memoria mediante arrays.

## Integrantes

- Alarcón Fortun Jhon Alexander
- Azua Chinga Luis Angel
- Pérez Tapia Maximiliano Jhonatan
- Fajardo Aveiga Leiton Aarón

## Descripción del proyecto

El sistema simula la gestión de una biblioteca: permite registrar libros y usuarios, realizar préstamos, registrar devoluciones, consultar disponibilidad y eliminar usuarios (junto con sus préstamos asociados). Toda la información se almacena en memoria (no hay base de datos real ni persistencia en archivos) a través de una única instancia centralizada de datos.

La aplicación es un **prototipo de consola**: no recibe datos por teclado, `main.ts` orquesta una demo con datos de prueba y muestra los resultados de cada operación paso a paso.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- npm (incluido con Node.js)

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar el proyecto TypeScript -> JavaScript
npm run build

# 3. Ejecutar la aplicación ya compilada
node dist/presentation/menus/main.js
```

> Alternativa sin compilar (requiere `ts-node`, puede fallar en versiones muy recientes de Node.js):
> ```bash
> npx ts-node src/presentation/menus/main.ts
> ```

## Estructura del proyecto

```
sistema-biblioteca/
├── package.json
├── tsconfig.json
├── Diagrama.mmd
└── src/
    ├── core/
    │   ├── entities/
    │   │   ├── Libro.ts                # Modelo de dominio (datos + getters/setters)
    │   │   ├── Usuario.ts              # Modelo de dominio (datos + getters/setters)
    │   │   └── Prestamo.ts             # Modelo de dominio (datos + getters/setters)
    │   └── services/
    │       ├── BibliotecaFactory.ts    # Patrón Factory (creación, validación, IDs)
    │       ├── LibroService.ts         # Reglas de negocio sobre libros
    │       ├── UsuarioService.ts       # Reglas de negocio sobre usuarios
    │       └── PrestamoService.ts      # Reglas de negocio sobre préstamos
    ├── data/
    │   └── repositories/
    │       └── DataContext.ts          # Patrón Singleton (arrays en memoria)
    └── presentation/
        └── menus/
            └── main.ts                 # Punto de entrada, orquesta la demo
```

## Arquitectura en capas

```
┌─────────────────────────────────────────┐
│         CAPA DE PRESENTACIÓN            │
│              main.ts                    │
│  (orquesta la demo, imprime resultados) │
└─────────────────┬───────────────────────┘
                  │ usa
                  ▼
┌─────────────────────────────────────────┐
│          CAPA DE NEGOCIO                │
│  BibliotecaFactory │ Services │ Entidades│
│  (creación, validación, reglas)         │
└─────────────────┬───────────────────────┘
                  │ persiste en
                  ▼
┌─────────────────────────────────────────┐
│           CAPA DE DATOS                 │
│            DataContext                  │
│ (arrays en memoria: libros, usuarios,   │
│              préstamos)                 │
└─────────────────────────────────────────┘
```

| Capa | Archivo(s) | Responsabilidad |
|------|------------|------------------|
| **Presentación** | `main.ts` | Punto de entrada. Ejecuta la demo y muestra el estado en cada paso. |
| **Negocio** | `Libro.ts`, `Usuario.ts`, `Prestamo.ts`, `BibliotecaFactory.ts`, `*Service.ts` | Entidades del dominio, creación con validaciones y reglas de negocio. |
| **Datos** | `DataContext.ts` | Almacenamiento en memoria. Única fuente de verdad de los datos. |

## Patrones de diseño

### Singleton — `DataContext`

Garantiza que exista **una sola instancia** del almacén de datos en toda la aplicación.

- Constructor **privado** (no se puede usar `new DataContext()` desde fuera).
- Método estático `getInstance()` como punto de acceso global.
- Arrays privados `libros`, `usuarios` y `prestamos` que simulan tablas de una base de datos.

```typescript
const contexto = DataContext.getInstance(); // siempre la misma instancia
```

### Factory — `BibliotecaFactory`

Centraliza la **creación de objetos** del dominio. Los servicios no instancian `Libro`, `Usuario` ni `Prestamo` directamente.

Responsabilidades de la fábrica:

1. Generar **IDs** para los usuarios.
2. Aplicar **validaciones de negocio** (campos vacíos, ISBN duplicado, disponibilidad insuficiente).
3. Construir la entidad ya validada, lista para ser persistida por los servicios.

```typescript
BibliotecaFactory.crearLibro("El principito", "Antoine de Saint-Exupéry", "978-...", 3);
BibliotecaFactory.crearUsuario("Ana García");
BibliotecaFactory.crearPrestamo(libro, usuario);
```

## Flujo de ejecución de la demo

1. `main.ts` registra libros y usuarios a través de `LibroService` y `UsuarioService`.
2. Se muestran los libros y usuarios registrados.
3. Se registran préstamos, actualizando la disponibilidad de cada libro.
4. Se registra una devolución y se valida disponibilidad puntual.
5. Se elimina un usuario (lo que también elimina sus préstamos asociados) y se muestra el estado final.

## Dependencias

| Paquete | Uso |
|---------|-----|
| `typescript` | Compilador y tipado estático |
| `ts-node` | Ejecutar TypeScript directamente sin compilar |
| `@types/node` | Tipos de Node.js para `console`, etc. |

## Posibles extensiones

- Agregar una capa de validación de entrada por consola (menú interactivo real).
- Reemplazar los arrays en memoria por persistencia en archivo JSON o base de datos.
- Añadir pruebas unitarias con Jest o Vitest.

## Licencia

Proyecto educativo de uso libre para fines académicos.
