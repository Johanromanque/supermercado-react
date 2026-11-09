import { formatCLP } from "../utils/formatters";

function ProductRow({ producto, mostrarAcciones = true, onEliminar }) {
  const stockBajo = producto.stock < 10;

  const handleEliminar = () => {
    const confirmacion = window.confirm(
      `¿Estás seguro de que deseas eliminar "${producto.nombre}" del inventario?`
    );
    if (confirmacion && onEliminar) {
      onEliminar(producto.id);
    }
  };

  return (
    <tr className="border-b border-slate-200 transition-colors odd:bg-white even:bg-slate-50 hover:bg-blue-50/60">
      {/* Nombre */}
      <td className="px-4 py-3.5 font-semibold text-slate-800">
        {producto.nombre}
      </td>

      {/* Marca (requerido explícitamente en la pauta) */}
      <td className="px-4 py-3.5 text-slate-600">
        {producto.marca}
      </td>

      {/* Tipo de producto */}
      <td className="px-4 py-3.5">
        <span className="rounded-md bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {producto.tipo}
        </span>
      </td>

      {/* Stock con indicador accesible */}
      <td className="px-4 py-3.5">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold ${
            stockBajo
              ? "bg-rose-100 text-rose-800"
              : "bg-emerald-100 text-emerald-800"
          }`}
        >
          {producto.stock} un. {stockBajo && <span aria-label="Stock bajo">⚠️</span>}
        </span>
      </td>

      {/* Precio formateado dinámicamente desde número */}
      <td className="px-4 py-3.5 font-bold text-emerald-700">
        {formatCLP(producto.precio)}
      </td>

      {/* Acciones conectadas o removidas según la vista */}
      {mostrarAcciones && (
        <td className="px-4 py-3.5 text-center">
          <button
            type="button"
            onClick={handleEliminar}
            className="rounded-md border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 transition-colors hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
            aria-label={`Eliminar producto ${producto.nombre}`}
          >
            Eliminar
          </button>
        </td>
      )}
    </tr>
  );
}

export default ProductRow;
