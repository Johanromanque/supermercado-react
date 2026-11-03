
function HeroCard() {
  return (
    <section
      className="relative mb-6 min-h-[280px] overflow-hidden rounded-xl bg-slate-900 shadow-md"
      aria-label="Bienvenida a Supermercado Mi Mercado"
    >
      {/* Imagen de fondo */}
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
        alt="Pasillos con productos de supermercado"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Capa oscura para mejorar la lectura */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 to-slate-900/30" />

      {/* Texto de bienvenida */}
      <div className="relative z-10 flex min-h-[280px] flex-col justify-center p-6 sm:p-10">
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Supermercado Mi Mercado
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
          Controla y supervisa el stock de productos, categorías y precios
          de forma eficiente para garantizar el abastecimiento continuo
          en nuestras sucursales.
        </p>

        <p className="mt-4 text-sm text-slate-300">
          Sistema activo de control de inventario
        </p>
      </div>
    </section>
  );
}

export default HeroCard;
