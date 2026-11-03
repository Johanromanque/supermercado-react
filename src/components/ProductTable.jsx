
import ProductRow from "./ProductRow";

function ProductTable({ productos }) {
  return (
    <section aria-labelledby="inventario-titulo">
      {/* Encabezado de la tabla */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2
          id="inventario-titulo"
          className="text-2xl font-bold text-blue-800"
        >
          Gestión de Inventario
        </h2>

        <button
          type="button"
          className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
        >
          + Agregar Producto
        </button>
      </div>

      {/* Tabla responsive */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th scope="col" className="px-4 py-4">ID</th>
              <th scope="col" className="px-4 py-4">Producto</th>
              <th scope="col" className="px-4 py-4">Categoría</th>
              <th scope="col" className="px-4 py-4">Stock</th>
              <th scope="col" className="px-4 py-4">Precio</th>
              <th scope="col" className="px-4 py-4 text-center">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <ProductRow
                key={producto.id}
                producto={producto}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductTable;

