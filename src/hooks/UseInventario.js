import { useContext } from "react";
import InventarioContext from "../context/InventarioContext";

function useInventario() {
  const contexto = useContext(InventarioContext);

  if (!contexto) {
    throw new Error(
      "useInventario debe utilizarse dentro de InventarioProvider",
    );
  }

  return contexto;
}

export default useInventario;
