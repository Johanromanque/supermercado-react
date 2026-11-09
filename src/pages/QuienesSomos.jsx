function QuienesSomos() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      {/* Encabezado */}
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">
          Quiénes Somos
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
          Somos una cadena de supermercados comprometida con brindar productos
          de la más alta calidad al mejor precio para las familias.
        </p>
      </div>

      {/* Misión y visión */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 text-3xl" aria-hidden="true"></div>

          <h2 className="mb-3 text-xl font-bold text-blue-800">
            Nuestra Misión
          </h2>

          <p className="leading-relaxed text-slate-600">
            Facilitar la vida cotidiana de nuestros clientes ofreciendo una
            experiencia de compra accesible, rápida y conveniente.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 text-3xl" aria-hidden="true"></div>

          <h2 className="mb-3 text-xl font-bold text-blue-800">
            Nuestra Visión
          </h2>

          <p className="leading-relaxed text-slate-600">
            Ser la red de supermercados referente en servicio, variedad e
            innovación en la gestión de inventario.
          </p>
        </article>
      </div>
    </section>
  );
}

export default QuienesSomos;
