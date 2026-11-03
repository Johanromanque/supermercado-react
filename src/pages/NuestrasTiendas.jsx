import { tiendas } from "../data/tiendas";

function NuestrasTiendas() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      {/* Título de la página */}
      <h1 className="mb-6 text-3xl font-bold text-blue-800">
        Nuestras Sucursales
      </h1>

      {/* Tarjetas de sucursales */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiendas.map((tienda) => (
          <article
            key={tienda.id}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="flex-1 p-6">
              <h2 className="mb-4 text-xl font-bold text-slate-800">
                {tienda.ciudad}
              </h2>

              <p className="mb-3 text-slate-600">📍 {tienda.direccion}</p>

              <p className="text-slate-600">
                🕒 <strong>Horario:</strong> {tienda.horario}
              </p>
            </div>

            <div className="px-6 pb-6">
              <button
                type="button"
                className="w-full rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Ver Ubicación
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default NuestrasTiendas;
