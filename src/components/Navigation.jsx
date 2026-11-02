import { Link, NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom py-3 bg-navy" aria-label="Navegación principal">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-white fs-4 brand-font" to="/">
          Supermercado <span className="text-warning">Mi Mercado</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Mostrar u ocultar menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/tiendas">
                Nuestras Tiendas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/quienes-somos">
                Quiénes Somos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
