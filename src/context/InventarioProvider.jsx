import { useReducer } from "react";
import InventarioContext from "./InventarioContext";
import { productos as productosIniciales } from "../data/productos";
import {
  inventarioReducer,
  crearEstadoInicial,
  TIPOS_ACCION,
} from "./inventarioReducer";

function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(
    inventarioReducer,
    productosIniciales,
    crearEstadoInicial
  );

  const agregarProducto = (datos) => {
    const nuevoProducto = {
      ...datos,
      id: crypto.randomUUID(),
      stock: Number(datos.stock),
      precio: Number(datos.precio),
    };

    dispatch({
      type: TIPOS_ACCION.AGREGAR_PRODUCTO,
      producto: nuevoProducto,
    });
  };

  const eliminarProducto = (productoId) => {
    dispatch({
      type: TIPOS_ACCION.ELIMINAR_PRODUCTO,
      productoId,
    });
  };

  const agregarAlCarrito = (productoId) => {
    dispatch({
      type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
      productoId,
    });
  };

  const disminuirCantidadCarrito = (productoId) => {
    dispatch({
      type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO,
      productoId,
    });
  };

  const eliminarDelCarrito = (productoId) => {
    dispatch({
      type: TIPOS_ACCION.ELIMINAR_DEL_CARRITO,
      productoId,
    });
  };

  const valor = {
    productos: estado.productos,
    carrito: estado.carrito,
    agregarProducto,
    eliminarProducto,
    agregarAlCarrito,
    disminuirCantidadCarrito,
    eliminarDelCarrito,
  };

  return (
    <InventarioContext.Provider value={valor}>
      {children}
    </InventarioContext.Provider>
  );
}

export default InventarioProvider;
