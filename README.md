# Supermercado React — Mi Mercado

Proyecto desarrollado para la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC.

Aplicación SPA construida con **React 19**, **React Router** y **Tailwind CSS 4** para la administración de inventario de supermercado y carrito de compras con gestión de estado avanzada.

---

## Tecnologías Utilizadas

- **React 19**
- **Vite 8**
- **React Router**
- **Tailwind CSS 4**
- **JavaScript (ES Modules)**, HTML5 y CSS3

---

## Funcionalidades por Etapa

### Semana 1 — Navegación SPA

- Configuración de React Router y estructura modular.
- Páginas: Inicio, Nuestras Tiendas, Quiénes Somos y 404 (Not Found).
- Barra de navegación responsive con marcado visual de ruta activa (`NavLink`).

### Semana 2 — Gestión de Estados y Formulario

- Migración a Tailwind CSS 4.
- Implementación de Context API.
- Formulario accesible (`FormField`) con validaciones de campos con expresiones regulares y retorno de errores por campo.
- Modelo de datos normalizado (`nombre`, `marca`, `tipo`, `stock`, `precio` numérico).
- Formateo de moneda CLP con `Intl.NumberFormat`.

### Semana 3 — React Avanzado: Filtros, Detalle y Carrito de Compras (Evaluación Sumativa)

- **Gestión de estado global con `useReducer`:**  
  Manejo centralizado y atómico de `{ productos, carrito }` mediante `inventarioReducer.js` para garantizar la conservación de existencias (`stock en bodega + cantidad en carrito = total de artículos`).
- **Filtro dinámico por categoría:**  
  Selector de categorías en la tabla de inventario que filtra los productos sin mutar la colección original. Incluye opción para ver todas las categorías.
- **Página de Detalle del Producto (`/producto/:id`):**  
  Vista individual mediante parámetros dinámicos con `useParams`, mostrando stock en tiempo real y botón reactivo para añadir al carrito.
- **Carrito de Compras (`/carrito`):**  
  Listado con subtotal por producto, cálculo automático del Total a Pagar y botones para aumentar (`+`), disminuir (`-`) o remover artículos, actualizando el stock disponible de forma instantánea.
- **Badge dinámico en el Navbar:**  
  Contador visual del número total de unidades reservadas en el carrito.

---

## Ejecución del Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Johanromanque/supermercado-react.git
   ```
