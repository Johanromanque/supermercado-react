// src/context/InventarioProvider.jsx
import { useState } from "react";
import InventarioContext from "./InventarioContext";
import { productos as productosIniciales } from "../data/productos";

function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(() =>
    productosIniciales.map((producto) => ({ ...producto }))
  );

  const agregarProducto = (datos) => {
    const nuevoProducto = {
      ...datos,
      id: crypto.randomUUID(),
      stock: Number(datos.stock),
      precio: Number(datos.precio),
    };

    setProductos((anteriores) => [nuevoProducto, ...anteriores]);
  };

  const eliminarProducto = (id) => {
    setProductos((anteriores) => anteriores.filter((p) => p.id !== id));
  };

  return (
    <InventarioContext.Provider
      value={{ productos, agregarProducto, eliminarProducto }}
    >
      {children}
    </InventarioContext.Provider>
  );
}

export default InventarioProvider;
