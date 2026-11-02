function ProductRow({ producto }) {
  return (
    <tr>
      <td>{producto.id}</td>
      <td className="fw-bold">{producto.nombre}</td>
      <td>
        <span className="badge bg-secondary">{producto.categoria}</span>
      </td>
      <td>
        <span
          className={`badge ${producto.stock < 10 ? "bg-danger" : "bg-info text-dark"}`}
        >
          {producto.stock} un.
        </span>
      </td>
      <td className="fw-bold text-success">{producto.precio}</td>
      <td className="text-center">
        <button type="button" className="btn btn-sm btn-outline-primary me-2">
          Editar
        </button>
        <button type="button" className="btn btn-sm btn-outline-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
