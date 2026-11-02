import ProductRow from "./ProductRow";

function ProductTable({ productos }) {
  return (
    <section aria-labelledby="inventario-titulo">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 id="inventario-titulo" className="text-primary m-0">Gestión de Inventario</h2>
        <button type="button" className="btn btn-success">+ Agregar Producto</button>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Producto</th>
              <th scope="col">Categoría</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col" className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ProductRow key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductTable;
