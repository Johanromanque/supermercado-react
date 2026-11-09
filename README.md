# Supermercado React — Mi Mercado

Proyecto académico desarrollado para la asignatura
Desarrollo Frontend II (PFY2202) de Duoc UC.

Aplicación SPA para la gestión de inventario de un
supermercado, desarrollada con React, React Router
y Tailwind CSS.

## Tecnologías utilizadas

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- JavaScript, HTML y CSS
- Git y GitHub

## Semana 1 — Navegación SPA

- Configuración de React Router.
- Página principal del supermercado.
- Página Nuestras Tiendas.
- Página Quiénes Somos.
- Componentes reutilizables.
- Navegación responsive.
- Página 404 para rutas inexistentes.

## Semana 2 — Gestión de estados

- Migración de Bootstrap a Tailwind CSS 4.
- Implementación de Context API.
- Estado global mediante useState.
- Hook personalizado useInventario.
- Formulario para registrar productos.
- Validación de campos obligatorios.
- Validación de stock y precio.
- Tabla dinámica de inventario.
- Actualización automática de productos
  entre las distintas páginas.

## Ejecutar el proyecto

1. Clonar el repositorio:

   git clone https://github.com/Johanromanque/supermercado-react.git

2. Instalar dependencias:

   npm install

3. Iniciar el servidor:

   npm run dev

4. Abrir la dirección local indicada por Vite.

## Verificaciones

- npm run lint
- npm run build

## Consideraciones

Los productos se almacenan en memoria utilizando
React Context y useState.

Los productos agregados se mantienen al navegar
entre páginas, pero se reinician al recargar
el navegador.

Las acciones de editar y eliminar productos
todavía no están implementadas.
