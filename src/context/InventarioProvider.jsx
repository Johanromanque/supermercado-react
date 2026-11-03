
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
    };

    setProductos((anteriores) => [
      ...anteriores,
      nuevoProducto,
    ]);
  };

  return (
    <InventarioContext.Provider
      value={{ productos, agregarProducto }}
    >
      {children}
    </InventarioContext.Provider>
  );
}

export default InventarioProvider;

