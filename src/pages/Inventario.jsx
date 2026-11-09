import ProductTable from "../components/ProductTable";
import useInventario from "../hooks/useInventario";

function Inventario() {
  const { productos, eliminarProducto } = useInventario();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10">
      <ProductTable
        productos={productos}
        titulo="Catálogo Completo de Inventario"
        subtitulo={`Total de productos en bodega: ${productos.length}`}
        mostrarAcciones={true}
        onEliminar={eliminarProducto}
      />
    </section>
  );
}

export default Inventario;
