# Supermercado React — Mi Mercado

Proyecto académico de **Desarrollo Frontend II (PFY2202), Bimestre 9**. Aplicación SPA (Single Page Application) de gestión de inventario de un supermercado, desarrollada con React, React Router y Bootstrap.

## Funcionalidades

- **Inicio (`/`):** banner de bienvenida y tabla con cuatro productos de ejemplo, categoría, stock y precio.
- **Nuestras Tiendas (`/tiendas`):** tres sucursales de ejemplo, sus direcciones y horarios.
- **Quiénes Somos (`/quienes-somos`):** presentación, misión y visión del supermercado.
- **Navegación:** React Router sin recarga completa; `NavLink` distingue la sección activa.
- **Página no encontrada (`*`):** mensaje 404 y enlace de regreso a Inicio.
- **Diseño adaptable:** componentes de Bootstrap 5 y estilos CSS personalizados.

> **Alcance actual:** los productos y las tiendas son datos locales de demostración. Los botones **Agregar Producto**, **Editar**, **Eliminar** y **Ver Ubicación** son visuales: sus funcionalidades se implementarán en futuras actividades.

## Tecnologías utilizadas

React 19 · React Router 7 · Vite 8 · JavaScript · HTML · CSS · Bootstrap 5 · Git y GitHub.

## Instalación y ejecución

Necesitas Node.js compatible con Vite 8 (Node.js 20.19+ o 22.12+; se recomienda una versión LTS actual) y npm.

```bash
git clone https://github.com/Johanromanque/supermercado-react.git
cd supermercado-react
npm install
npm run dev
```

Abre la dirección local que muestra Vite. Para verificar el código y generar la versión de producción:

```bash
npm run lint
npm run build
```

## Estructura principal

```text
src/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── HeroCard.jsx
│   ├── ProductTable.jsx
│   └── ProductRow.jsx
├── data/
│   ├── productos.js
│   └── tiendas.js
├── pages/
│   ├── Home.jsx
│   ├── NuestrasTiendas.jsx
│   ├── QuienesSomos.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Evolución del proyecto

- **Semana 1:** SPA inicial de tres páginas con React Router, inventario, sucursales y presentación.
- **Mejoras posteriores a la retroalimentación:** dependencia única de React Router, Bootstrap cargado desde npm, datos separados, componentes reutilizables, `NavLink` y ruta 404.

El proyecto continuará ampliándose en las siguientes actividades del bimestre.
