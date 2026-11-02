import { tiendas } from "../data/tiendas";

function NuestrasTiendas() {
  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-primary mb-4">Nuestras Sucursales</h2>
      <div className="row g-4">
        {tiendas.map((tienda) => (
          <div key={tienda.id} className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-dark fw-bold">{tienda.ciudad}</h5>
                <p className="card-text text-muted mb-2">📍 {tienda.direccion}</p>
                <p className="card-text">🕒 <strong>Horario:</strong> {tienda.horario}</p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <button type="button" className="btn btn-outline-primary w-100">Ver Ubicación</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NuestrasTiendas;
