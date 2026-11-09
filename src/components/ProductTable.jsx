import { useState, useId } from "react";
import { Link } from "react-router";
import { formatCLP } from "../utils/formatters";
import { CATEGORIAS } from "../data/categorias";
import {
  VALOR_TODAS,
  filtrarProductosPorCategoria,
} from "../utils/filtroInventario";

function ProductTable({
  productos = [],
  titulo = "Gestión de Inventario",
  subtitulo = null,
  mostrarFiltro = true,
  mostrarAcciones = true,
  onEliminar = null,
  limite = null,
}) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState(VALOR_TODAS);
  const idFiltro = useId();

  // Filtrado dinámico sin mutar el inventario original
  const productosFiltrados = filtrarProductosPorCategoria(
    productos,
    categoriaSeleccionada,
  );

  const itemsAMostrar = limite
    ? productosFiltrados.slice(0, limite)
    : productosFiltrados;

  const confirmarYEliminar = (id, nombre) => {
    if (
      window.confirm(
        `¿Estás seguro de que deseas eliminar "${nombre}" del inventario?`,
      )
    ) {
      onEliminar?.(id);
    }
  };

  return (
    <section aria-labelledby="tabla-inventario-titulo" className="space-y-4">
      {/* Encabezado */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2
            id="tabla-inventario-titulo"
            className="text-2xl font-bold text-blue-800"
          >
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mt-1 text-sm text-slate-600">{subtitulo}</p>
          )}
        </div>

        <Link
          to="/agregar-producto"
          className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white no-underline shadow-xs transition-colors hover:bg-emerald-700"
        >
          + Agregar Producto
        </Link>
      </div>

      {/* Control de Filtro Dinámico */}
      {mostrarFiltro && (
        <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <label
              htmlFor={idFiltro}
              className="text-sm font-semibold text-slate-700"
            >
              Filtrar por categoría:
            </label>
            <select
              id={idFiltro}
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
            >
              <option value={VALOR_TODAS}>Todas las categorías</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs text-slate-500">
            Mostrando {itemsAMostrar.length} de {productos.length} artículos
          </span>
        </div>
      )}

      {/* Tabla */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Producto
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Marca
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Tipo
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Stock
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Precio
              </th>
              <th scope="col" className="px-4 py-3.5 text-center font-semibold">
                Detalle / Acción
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {itemsAMostrar.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  No hay productos para la categoría seleccionada.
                </td>
              </tr>
            ) : (
              itemsAMostrar.map((prod) => {
                const stockBajo = prod.stock < 10;
                const sinStock = prod.stock === 0;

                return (
                  <tr
                    key={prod.id}
                    className="transition-colors hover:bg-blue-50/50 odd:bg-white even:bg-slate-50/70"
                  >
                    <td className="px-4 py-3.5 font-semibold text-slate-800">
                      <Link
                        to={`/producto/${prod.id}`}
                        className="text-blue-700 hover:underline"
                      >
                        {prod.nombre}
                      </Link>
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
                          sinStock
                            ? "bg-slate-200 text-slate-700"
                            : stockBajo
                              ? "bg-rose-100 text-rose-800"
                              : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {sinStock ? "Agotado (0 un.)" : `${prod.stock} un.`}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-emerald-700">
                      {formatCLP(prod.precio)}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/producto/${prod.id}`}
                          className="rounded-md border border-blue-600 bg-white px-2.5 py-1 text-xs font-medium text-blue-700 hover:bg-blue-600 hover:text-white"
                        >
                          Ver detalle
                        </Link>
                        {mostrarAcciones && onEliminar && (
                          <button
                            type="button"
                            onClick={() =>
                              confirmarYEliminar(prod.id, prod.nombre)
                            }
                            className="rounded-md border border-rose-300 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-600 hover:text-white"
                          >
                            Eliminar
                          </button>
                        )}
                      </div>
                    </td>
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
