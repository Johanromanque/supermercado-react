import { useState } from "react";
import { Link } from "react-router";
import useInventario from "../hooks/useInventario";
import { formatCLP } from "../utils/formatters";

function Carrito() {
  const {
    productos,
    carrito,
    agregarAlCarrito,
    disminuirCantidadCarrito,
    eliminarDelCarrito,
  } = useInventario();

  const [aviso, setAviso] = useState("");

  const mostrarMensaje = (msg) => {
    setAviso(msg);
    setTimeout(() => setAviso(""), 3000);
  };

  const getProducto = (productoId) =>
    productos.find((p) => p.id === productoId);

  // Totales
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  const totalPagar = carrito.reduce((sum, item) => {
    const prod = getProducto(item.productoId);
    return sum + (prod ? prod.precio * item.cantidad : 0);
  }, 0);

  const handleAumentar = (item) => {
    const prod = getProducto(item.productoId);
    if (!prod || prod.stock <= 0) {
      mostrarMensaje("No hay más stock disponible de este producto.");
      return;
    }
    agregarAlCarrito(item.productoId);
    mostrarMensaje(`Se agregó 1 unidad más de ${prod.nombre}.`);
  };

  const handleDisminuir = (item) => {
    const prod = getProducto(item.productoId);
    disminuirCantidadCarrito(item.productoId);
    if (item.cantidad === 1) {
      mostrarMensaje(`"${prod?.nombre}" fue removido del carrito.`);
    } else {
      mostrarMensaje(`Se descontó 1 unidad de ${prod?.nombre}.`);
    }
  };

  const handleQuitarTodo = (item) => {
    const prod = getProducto(item.productoId);
    if (window.confirm(`¿Quitar todas las unidades de "${prod?.nombre}" del carrito?`)) {
      eliminarDelCarrito(item.productoId);
      mostrarMensaje(`"${prod?.nombre}" fue removido.`);
    }
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Carrito de Compras</h1>
          <p className="text-sm text-slate-600">
            Revisa y gestiona los artículos que deseas adquirir.
          </p>
        </div>

        <Link
          to="/inventario"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Continuar comprando
        </Link>
      </div>

      {aviso && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm font-semibold text-blue-800"
        >
          ℹ {aviso}
        </div>
      )}

      {carrito.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-xs">
          <p className="text-5xl" aria-hidden="true">🛒</p>
          <h2 className="mt-4 text-xl font-bold text-slate-800">
            Tu carrito está vacío
          </h2>
          <p className="mt-2 mb-6 text-sm text-slate-500">
            Aún no has agregado productos desde el inventario.
          </p>
          <Link
            to="/inventario"
            className="inline-block rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white hover:bg-emerald-700"
          >
            Ver productos disponibles
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {carrito.map((item) => {
              const prod = getProducto(item.productoId);
              if (!prod) return null;

              const sinStockRestante = prod.stock <= 0;
              const subtotal = prod.precio * item.cantidad;

              return (
                <li
                  key={item.productoId}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                      {prod.tipo}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-slate-800">
                      {prod.nombre}
                    </h3>
                    <p className="text-xs text-slate-500">Marca: {prod.marca}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Stock restante en bodega:{" "}
                      <span className={sinStockRestante ? "font-bold text-rose-600" : "font-semibold text-slate-700"}>
                        {prod.stock} un.
                      </span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-500">Precio Unitario:</span>
                    <p className="font-semibold text-slate-800">{formatCLP(prod.precio)}</p>
                    <span className="text-xs text-slate-500">Subtotal:</span>
                    <p className="font-bold text-emerald-700">{formatCLP(subtotal)}</p>
                  </div>

                  {/* Controles + y - */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg border border-slate-300 bg-slate-50">
                      <button
                        type="button"
                        onClick={() => handleDisminuir(item)}
                        className="px-3 py-1.5 font-bold text-slate-700 hover:bg-slate-200 rounded-l-lg"
                        aria-label={`Disminuir cantidad de ${prod.nombre}`}
                      >
                        -
                      </button>
                      <span className="px-3 py-1.5 font-bold text-sm text-slate-900 min-w-[2rem] text-center">
                        {item.cantidad}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAumentar(item)}
                        disabled={sinStockRestante}
                        className="px-3 py-1.5 font-bold text-slate-700 hover:bg-slate-200 rounded-r-lg disabled:cursor-not-allowed disabled:text-slate-300"
                        aria-label={`Aumentar cantidad de ${prod.nombre}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuitarTodo(item)}
                      className="text-xs text-rose-600 hover:text-rose-800 hover:underline px-2"
                      aria-label={`Quitar ${prod.nombre} del carrito`}
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Resumen del Pedido */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-slate-600">Total unidades:</span>
              <span className="font-bold text-slate-800">{totalItems} un.</span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-lg font-bold text-slate-800">Total a Pagar:</span>
              <span className="text-2xl font-extrabold text-emerald-700">
                {formatCLP(totalPagar)}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrito;
