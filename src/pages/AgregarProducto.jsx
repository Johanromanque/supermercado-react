
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import useInventario from "../hooks/useInventario";

const valoresIniciales = {
  nombre: "",
  marca: "",
  tipo: "",
  stock: "",
  precio: "",
};

function AgregarProducto() {
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [error, setError] = useState("");
  const { agregarProducto } = useInventario();
  const navigate = useNavigate();

  // Actualiza el estado cuando el usuario escribe
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setError("");
  };

  // Procesa el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nombre = formulario.nombre.trim();
    const marca = formulario.marca.trim();
    const stock = Number(formulario.stock);
    const precio = Number(formulario.precio);

    // Validaciones
    if (!nombre || !marca || !formulario.tipo ||
        formulario.stock === "" || formulario.precio === "") {
      setError("Debes completar todos los campos.");
      return;
    }

    if (!Number.isInteger(stock) || stock < 0 || precio <= 0 ||
        !Number.isFinite(precio)) {
      setError("Ingresa un stock válido y un precio mayor que cero.");
      return;
    }

    const nuevoProducto = {
      nombre,
      marca,
      tipo: formulario.tipo,
      categoria: formulario.tipo,
      stock,
      precio: `$${precio.toLocaleString("es-CL")}`,
    };

    agregarProducto(nuevoProducto);

    // Regresamos al inicio para ver el nuevo producto
    navigate("/");
  };

  const claseInput =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 " +
    "text-slate-800 outline-none focus:border-blue-600 " +
    "focus:ring-2 focus:ring-blue-100";

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-blue-800">
          Agregar Producto
        </h1>

        <p className="text-slate-600">
          Completa el formulario para registrar un nuevo
          artículo en el inventario del supermercado.
        </p>
      </div>

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700"
          >
            {error}
          </div>
        )}

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="mb-2 block font-semibold">
            Nombre del producto
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ej: Arroz Grado 1 1kg"
            value={formulario.nombre}
            onChange={manejarCambio}
            className={claseInput}
            required
          />
        </div>

        {/* Marca */}
        <div>
          <label htmlFor="marca" className="mb-2 block font-semibold">
            Marca
          </label>
          <input
            id="marca"
            name="marca"
            type="text"
            placeholder="Ej: Tucapel"
            value={formulario.marca}
            onChange={manejarCambio}
            className={claseInput}
            required
          />
        </div>

        {/* Tipo de producto */}
        <div>
          <label htmlFor="tipo" className="mb-2 block font-semibold">
            Tipo de producto
          </label>
          <select
            id="tipo"
            name="tipo"
            value={formulario.tipo}
            onChange={manejarCambio}
            className={claseInput}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Frutas y verduras">Frutas y verduras</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Stock y precio */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="stock" className="mb-2 block font-semibold">
              Stock disponible
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              placeholder="Ej: 25"
              value={formulario.stock}
              onChange={manejarCambio}
              className={claseInput}
              required
            />
          </div>

          <div>
            <label htmlFor="precio" className="mb-2 block font-semibold">
              Precio (CLP)
            </label>
            <input
              id="precio"
              name="precio"
              type="number"
              min="1"
              step="1"
              placeholder="Ej: 1590"
              value={formulario.precio}
              onChange={manejarCambio}
              className={claseInput}
              required
            />
          </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Guardar Producto
          </button>

          <Link
            to="/"
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 no-underline hover:bg-slate-100"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AgregarProducto;
