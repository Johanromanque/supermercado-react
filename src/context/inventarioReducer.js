export const TIPOS_ACCION = {
  AGREGAR_PRODUCTO: "AGREGAR_PRODUCTO",
  ELIMINAR_PRODUCTO: "ELIMINAR_PRODUCTO",
  AGREGAR_AL_CARRITO: "AGREGAR_AL_CARRITO",
  DISMINUIR_CANTIDAD_CARRITO: "DISMINUIR_CANTIDAD_CARRITO",
  ELIMINAR_DEL_CARRITO: "ELIMINAR_DEL_CARRITO",
};

export function crearEstadoInicial(productosIniciales) {
  return {
    productos: productosIniciales.map((p) => ({ ...p })),
    carrito: [],
  };
}

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case TIPOS_ACCION.AGREGAR_PRODUCTO: {
      return {
        ...estado,
        productos: [accion.producto, ...estado.productos],
      };
    }

    case TIPOS_ACCION.ELIMINAR_PRODUCTO: {
      return {
        ...estado,
        productos: estado.productos.filter((p) => p.id !== accion.productoId),
        carrito: estado.carrito.filter((item) => item.productoId !== accion.productoId),
      };
    }

    case TIPOS_ACCION.AGREGAR_AL_CARRITO: {
      const producto = estado.productos.find((p) => p.id === accion.productoId);

      // Si no existe o no tiene stock disponible, no se modifica el estado
      if (!producto || producto.stock <= 0) {
        return estado;
      }

      // Restar 1 al stock del inventario
      const productosActualizados = estado.productos.map((p) =>
        p.id === accion.productoId ? { ...p, stock: p.stock - 1 } : p
      );

      // Aumentar o agregar al carrito
      const itemExistente = estado.carrito.find(
        (item) => item.productoId === accion.productoId
      );

      const carritoActualizado = itemExistente
        ? estado.carrito.map((item) =>
            item.productoId === accion.productoId
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [...estado.carrito, { productoId: accion.productoId, cantidad: 1 }];

      return {
        ...estado,
        productos: productosActualizados,
        carrito: carritoActualizado,
      };
    }

    case TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO: {
      const itemEnCarrito = estado.carrito.find(
        (item) => item.productoId === accion.productoId
      );

      if (!itemEnCarrito) {
        return estado;
      }

      // Devolver 1 al stock del inventario
      const productosActualizados = estado.productos.map((p) =>
        p.id === accion.productoId ? { ...p, stock: p.stock + 1 } : p
      );

      const nuevaCantidad = itemEnCarrito.cantidad - 1;

      // Si llega a 0, se remueve del carrito
      const carritoActualizado =
        nuevaCantidad === 0
          ? estado.carrito.filter((item) => item.productoId !== accion.productoId)
          : estado.carrito.map((item) =>
              item.productoId === accion.productoId
                ? { ...item, cantidad: nuevaCantidad }
                : item
            );

      return {
        ...estado,
        productos: productosActualizados,
        carrito: carritoActualizado,
      };
    }

    case TIPOS_ACCION.ELIMINAR_DEL_CARRITO: {
      const itemEnCarrito = estado.carrito.find(
        (item) => item.productoId === accion.productoId
      );

      if (!itemEnCarrito) {
        return estado;
      }

      // Devolver todas las unidades reservadas al stock
      const productosActualizados = estado.productos.map((p) =>
        p.id === accion.productoId
          ? { ...p, stock: p.stock + itemEnCarrito.cantidad }
          : p
      );

      const carritoActualizado = estado.carrito.filter(
        (item) => item.productoId !== accion.productoId
      );

      return {
        ...estado,
        productos: productosActualizados,
        carrito: carritoActualizado,
      };
    }

    default:
      return estado;
  }
}
