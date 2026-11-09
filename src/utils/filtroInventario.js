export const VALOR_TODAS = "todas";

export function filtrarProductosPorCategoria(productos, categoriaSeleccionada) {
  if (!categoriaSeleccionada || categoriaSeleccionada === VALOR_TODAS) {
    return productos;
  }

  return productos.filter(
    (p) => (p.tipo || p.categoria) === categoriaSeleccionada
  );
}
