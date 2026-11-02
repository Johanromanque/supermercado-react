function HeroCard() {
  return (
    <div className="card bg-dark text-white border-0 shadow-sm mb-4 overflow-hidden hero-card">
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
        className="card-img opacity-50 hero-img"
        alt="Pasillos con productos de supermercado"
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
  );
}

export default HeroCard;
