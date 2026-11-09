import { useState } from "react";
import { Link, useParams } from "react-router";
import useInventario from "../hooks/useInventario";
import { formatCLP } from "../utils/formatters";

function DetalleProducto() {
  const { id } = useParams();
  const { productos, agregarAlCarrito } = useInventario();
  const [aviso, setAviso] = useState("");

  const producto = productos.find((item) => String(item.id) === String(id));

  if (!producto) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-xs">
          <h1 className="mb-2 text-2xl font-bold text-slate-800">
            Producto no encontrado
          </h1>
          <p className="mb-6 text-slate-600">
            El artículo que buscas no existe o fue retirado del inventario.
          </p>
          <Link
            to="/inventario"
            className="inline-block rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-800"
          >
            Volver al inventario
          </Link>
        </div>
      </section>
    );
  }

  const sinStock = producto.stock <= 0;

  const handleAgregar = () => {
    if (sinStock) return;
    agregarAlCarrito(producto.id);
    setAviso(`¡"${producto.nombre}" agregado al carrito!`);
    setTimeout(() => setAviso(""), 3000);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      {/* Botones de navegación */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/inventario"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Volver al Inventario
        </Link>
        <Link
          to="/carrito"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Ir al Carrito →
        </Link>
      </div>

      {/* Notificación accesible */}
      {aviso && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800"
        >
          ✓ {aviso}
        </div>
      )}

      {/* Tarjeta de detalle */}
      <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-900 p-6 text-white">
          <span className="mb-2 inline-block rounded-md bg-amber-400 px-2.5 py-0.5 text-xs font-bold text-slate-900">
            {producto.tipo}
          </span>
          <h1 className="text-3xl font-extrabold">{producto.nombre}</h1>
          <p className="mt-1 text-sm text-slate-300">Marca: {producto.marca}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Precio Unitario
              </span>
              <p className="text-3xl font-extrabold text-emerald-700">
                {formatCLP(producto.precio)}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Disponibilidad en Bodega
              </span>
              <p className="mt-1">
                <span
                  className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-bold ${
                    sinStock
                      ? "bg-rose-100 text-rose-800"
                      : producto.stock < 10
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {sinStock ? "Sin stock disponible" : `${producto.stock} unidades disponibles`}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-3 rounded-lg bg-slate-50 p-5">
            <p className="text-xs text-slate-600">
              Al hacer clic en &quot;Agregar al carrito&quot;, se descontará automáticamente 1 unidad del inventario general.
            </p>
            <button
              type="button"
              onClick={handleAgregar}
              disabled={sinStock}
              className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              {sinStock ? "Agotado temporalmente" : "🛒 Agregar al carrito"}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default DetalleProducto;
