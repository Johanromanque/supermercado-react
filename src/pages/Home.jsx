const Home = () => {
  const productos = [
    {
      id: 1,
      nombre: "Arroz Grado 1 1kg",
      categoria: "Abarrotes",
      stock: 45,
      precio: "$1.290",
    },
    {
      id: 2,
      nombre: "Leche Entera 1L",
      categoria: "Lácteos",
      stock: 30,
      precio: "$1.050",
    },
    {
      id: 3,
      nombre: "Aceite Vegetal 900ml",
      categoria: "Abarrotes",
      stock: 12,
      precio: "$2.490",
    },
    {
      id: 4,
      nombre: "Detergente Líquido 3L",
      categoria: "Limpieza",
      stock: 8,
      precio: "$7.990",
    },
  ];

  return (
    <div className="container mt-4 mb-5 pb-5">
      {/* 1. Tarjeta con superposición de imagen arriba */}
      <div className="card bg-dark text-white border-0 shadow-sm mb-4 overflow-hidden hero-card">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
          className="card-img opacity-50 hero-img"
          alt="Supermercado"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center p-4 p-md-5">
          <h3 className="card-title fw-bold">Supermercado Mi Mercado</h3>
          <p className="card-text lead fs-6 fs-md-5">
            Controla y supervisa el stock de productos, categorías y precios de
            forma eficiente para garantizar el abastecimiento continuo en
            nuestras sucursales
          </p>
          <p className="card-text text-white-50 mb-0">
            <small>Sistema activo de control de inventario</small>
          </p>
        </div>
      </div>

      {/* 2. Título y botón colocados debajo de la tarjeta */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary m-0">Gestión de Inventario</h2>
        <button className="btn btn-success">+ Agregar Producto</button>
      </div>

      {/* 3. Tabla de inventario */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Precio</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td className="fw-bold">{prod.nombre}</td>
                <td>
                  <span className="badge bg-secondary">{prod.categoria}</span>
                </td>
                <td>
                  <span
                    className={`badge ${prod.stock < 10 ? "bg-danger" : "bg-info text-dark"}`}
                  >
                    {prod.stock} un.
                  </span>
                </td>
                <td className="fw-bold text-success">{prod.precio}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-outline-primary me-2">
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
