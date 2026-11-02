import { Link } from "react-router";

function NotFound() {
  return (
    <div className="container text-center py-5" role="status">
      <h1 className="display-4 fw-bold text-primary">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-secondary mb-4">
        La dirección que ingresaste no existe en el supermercado.
      </p>
      <Link className="btn btn-primary" to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
