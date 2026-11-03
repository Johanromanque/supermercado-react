function ProductRow({ producto }) {
  const stockBajo = producto.stock < 10;

  return (
    <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50 hover:bg-blue-50">
      <td className="px-4 py-4 text-slate-600">{producto.id}</td>

      <td className="px-4 py-4 font-semibold text-slate-800">
        {producto.nombre}
      </td>

      <td className="px-4 py-4">
        <span className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          {producto.categoria}
        </span>
      </td>

      <td className="px-4 py-4">
        <span
          className={`rounded-md px-3 py-1 text-xs font-semibold ${
            stockBajo
              ? "bg-rose-100 text-rose-800"
              : "bg-cyan-100 text-cyan-900"
          }`}
        >
          {producto.stock} un.
        </span>
      </td>

      <td className="px-4 py-4 font-bold text-emerald-700">
        {producto.precio}
      </td>

      <td className="px-4 py-4 text-center">
        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="rounded-md border border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            Editar
          </button>

          <button
            type="button"
            className="rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-700 transition-colors hover:bg-red-600 hover:text-white"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
