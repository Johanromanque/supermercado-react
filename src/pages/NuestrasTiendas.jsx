
const NuestrasTiendas = () => {
  const tiendas = [
    { id: 1, ciudad: 'Santiago Centro', direccion: 'Av. Libertador Bernardo O\'Higgins 1234', horario: '08:30 - 21:00 hrs' },
    { id: 2, ciudad: 'Providencia', direccion: 'Av. Providencia 456', horario: '08:30 - 21:30 hrs' },
    { id: 3, ciudad: 'Viña del Mar', direccion: 'Av. San Martín 789', horario: '09:00 - 21:00 hrs' },
  ];

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
                <button className="btn btn-outline-primary w-100">Ver Ubicación</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuestrasTiendas;
