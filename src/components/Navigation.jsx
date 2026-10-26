import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom py-3 bg-navy">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-white fs-4 brand-font" to="/">
          Supermercado <span className="text-warning">Mi Mercado</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/tiendas">Nuestras Tiendas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/quienes-somos">Quiénes Somos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;