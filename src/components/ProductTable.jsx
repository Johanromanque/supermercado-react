// src/components/ProductTable.jsx
import { Link } from "react-router";
import { formatCLP } from "../utils/formatters";

function ProductTable({
  productos = [],
  titulo = "Gestión de Inventario",
  subtitulo = null,
  mostrarAcciones = true,
  onEliminar = null,
  limite = null,
}) {
  const itemsAMostrar = limite ? productos.slice(0, limite) : productos;

  const confirmarYEliminar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${nombre}" del inventario?`)) {
      onEliminar?.(id);
    }
  };

  return (
    <section aria-labelledby="tabla-inventario-titulo" className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 id="tabla-inventario-titulo" className="text-2xl font-bold text-blue-800">
            {titulo}
          </h2>
          {subtitulo && <p className="mt-1 text-sm text-slate-600">{subtitulo}</p>}
        </div>

        <Link
          to="/agregar-producto"
          className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white no-underline shadow-xs transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
        >
          + Agregar Producto
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th scope="col" className="px-4 py-3.5 font-semibold">Producto</th>
              <th scope="col" className="px-4 py-3.5 font-semibold">Marca</th>
              <th scope="col" className="px-4 py-3.5 font-semibold">Tipo</th>
              <th scope="col" className="px-4 py-3.5 font-semibold">Stock</th>
              <th scope="col" className="px-4 py-3.5 font-semibold">Precio</th>
              {mostrarAcciones && (
                <th scope="col" className="px-4 py-3.5 text-center font-semibold">
                  Acciones
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {itemsAMostrar.length === 0 ? (
              <tr>
                <td
                  colSpan={mostrarAcciones ? 6 : 5}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  No hay productos registrados en el inventario.
                </td>
              </tr>
            ) : (
              itemsAMostrar.map((prod) => {
                const stockBajo = prod.stock < 10;
                return (
                  <tr
                    key={prod.id}
                    className="transition-colors hover:bg-blue-50/50 odd:bg-white even:bg-slate-50/70"
                  >
                    <td className="px-4 py-3.5 font-semibold text-slate-800">
                      {prod.nombre}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600">{prod.marca}</td>
                    <td className="px-4 py-3.5">
                      <span className="rounded-md bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {prod.tipo}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ${
                          stockBajo
                            ? "bg-rose-100 text-rose-800"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {prod.stock} un. {stockBajo && "⚠️ Crítico"}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-emerald-700">
                      {formatCLP(prod.precio)}
                    </td>
                    {mostrarAcciones && (
                      <td className="px-4 py-3.5 text-center">
                        <button
                          type="button"
                          onClick={() => confirmarYEliminar(prod.id, prod.nombre)}
                          className="rounded-md border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 transition-colors hover:bg-rose-600 hover:text-white focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
                          aria-label={`Eliminar producto ${prod.nombre}`}
                        >
                          Eliminar
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductTable;
