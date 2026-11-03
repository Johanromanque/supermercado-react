import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navigation() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  const navLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 font-semibold transition-colors ${
      isActive
        ? "bg-blue-800 text-amber-300 lg:bg-transparent lg:underline lg:decoration-amber-300 lg:underline-offset-8"
        : "text-white hover:bg-blue-800 hover:text-blue-200 lg:hover:bg-transparent"
    }`;

  return (
    <nav
      className="bg-[#1e3a8a] text-white shadow-md"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        {/* Nombre del supermercado */}
        <Link
          to="/"
          onClick={cerrarMenu}
          className="brand-font text-lg sm:text-xl"
        >
          Supermercado <span className="text-amber-300">Mi Mercado</span>
        </Link>

        {/* Botón del menú para celulares */}
        <button
          type="button"
          className="rounded-lg border border-white/40 px-3 py-2 text-white hover:bg-blue-800 lg:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          <span aria-hidden="true">{menuAbierto ? "✕" : "☰"}</span>
        </button>

        {/* Enlaces de navegación */}
        <div
          id="menu-principal"
          className={`${menuAbierto ? "block" : "hidden"} w-full lg:block lg:w-auto`}
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
            <li>
              <NavLink to="/" end className={navLinkClass} onClick={cerrarMenu}>
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tiendas"
                className={navLinkClass}
                onClick={cerrarMenu}
              >
                Nuestras Tiendas
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/quienes-somos"
                className={navLinkClass}
                onClick={cerrarMenu}
              >
                Quiénes Somos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventario"
                className={navLinkClass}
                onClick={cerrarMenu}
              >
                Inventario
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/agregar-producto"
                className={navLinkClass}
                onClick={cerrarMenu}
              >
                Agregar Producto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
