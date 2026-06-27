# Gestión de Biblioteca

Sistema de consola para la gestión de una biblioteca, desarrollado como proyecto de la asignatura **Programación Orientada a Objetos** (Tecnologías de la Información, Universidad Laica Eloy Alfaro de Manabí).

## Descripción

El sistema gestiona tres entidades principales: **Libros**, **Usuarios** y **Préstamos**. A través de un menú interactivo en consola permite registrar y eliminar libros y usuarios, realizar búsquedas con filtros (título, autor, nombre o ID), y gestionar los préstamos desde su creación hasta su devolución o cancelación.

## Integrantes

- Alarcón Fortún Jhon Alexander
- Azua Chinga Luis Angel
- Fajardo Aveiga Leyton Aaron
- Peres Tapia Maximiliano Jhonatan

**Docente:** Edgardo Panchana
**Materia:** Programación Orientada a Objetos — Nivel 3

## Requisitos funcionales

1. El sistema debe permitir agregar libros con título, autor, ISBN y cantidad de libros disponibles.
2. El sistema debe permitir buscar libros por título.
3. El sistema debe mostrar la lista de libros actualmente prestados.
4. El sistema debe permitir registrar préstamos de los libros.
5. El sistema debe permitir registrar la devolución de un libro prestado.
6. El sistema debe mostrar la lista de libros disponibles.
7. El sistema debe permitir eliminar usuarios del sistema.
8. El sistema debe permitir buscar usuarios por ID.
9. El sistema debe validar que no se preste un libro que no esté disponible.
10. El sistema debe permitir eliminar libros del catálogo.

## Tecnologías

- **Lenguaje:** TypeScript
- **Editor:** Visual Studio Code
- **Control de versiones:** GitHub

## Estructura del proyecto
src/

├─ core/

│   ├─ entities/     → Libro, Usuario, Prestamo (datos + getters/setters)

│   └─ services/     → Reglas y validaciones de negocio

├─ data/

│   └─ repositories/ → Acceso y almacenamiento de datos (patrón Singleton)

└─ presentation/

└─ menus/        → Interacción por consola

## Diagrama de clases

El diagrama de clases del proyecto se encuentra en [`Diagrama.mmd`](./Diagrama.mmd) (sintaxis Mermaid).

## Estado del proyecto

En desarrollo — Primera etapa: modelo de datos inicial (clases con propiedades y métodos, aún sin lógica de negocio funcional).

## Cómo ejecutar

```bash
npm install
npx ts-node src/index.ts
```