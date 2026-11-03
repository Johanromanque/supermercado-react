
import { Link } from "react-router";
import useInventario from "../hooks/useInventario";

function Inventario() {
  const { productos } = useInventario();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10">
      {/* Encabezado */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-800">
            Inventario de Productos
          </h1>

          <p className="mt-2 text-slate-600">
            Total de artículos registrados: {productos.length}
          </p>
        </div>

        <Link
          to="/agregar-producto"
          className="rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white no-underline hover:bg-emerald-700"
        >
          + Agregar Producto
        </Link>
      </div>

      {/* Tabla del inventario */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th scope="col" className="px-4 py-4">Producto</th>
              <th scope="col" className="px-4 py-4">Marca</th>
              <th scope="col" className="px-4 py-4">Tipo</th>
              <th scope="col" className="px-4 py-4">Stock</th>
              <th scope="col" className="px-4 py-4">Precio</th>
            </tr>
          </thead>

          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              productos.map((producto) => (
                <tr
                  key={producto.id}
                  className="border-b border-slate-200 even:bg-slate-50 hover:bg-blue-50"
                >
                  <td className="px-4 py-4 font-semibold text-slate-800">
                    {producto.nombre}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {producto.marca || "No informada"}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {producto.tipo || producto.categoria || "Sin clasificar"}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-md px-3 py-1 text-xs font-semibold ${
                        producto.stock < 10
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {producto.stock} un.
                    </span>
                  </td>

                  <td className="px-4 py-4 font-semibold text-emerald-700">
                    {producto.precio}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Inventario;

