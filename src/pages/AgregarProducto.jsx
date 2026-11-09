import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router";
import useInventario from "../hooks/useInventario";
import FormField from "../components/FormField";
import { validarFormularioProducto } from "../utils/validaciones";

const valoresIniciales = {
  nombre: "",
  marca: "",
  tipo: "",
  stock: "",
  precio: "",
};

function AgregarProducto() {
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState(false);
  const { agregarProducto } = useInventario();
  const navigate = useNavigate();

  // Referencia única al formulario para dirigir el foco accesible
  const formRef = useRef(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));

    // Si había un error en este campo, lo limpiamos al escribir
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const { esValido, errores: erroresValidados } =
      validarFormularioProducto(formulario);

    if (!esValido) {
      setErrores(erroresValidados);

      // Accesibilidad: lleva el foco automáticamente al primer input con error
      setTimeout(() => {
        const primerInvalido = formRef.current?.querySelector(
          '[aria-invalid="true"]',
        );
        if (primerInvalido) {
          primerInvalido.focus();
        }
      }, 0);
      return;
    }

    agregarProducto({
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo,
      stock: Number(formulario.stock),
      precio: Number(formulario.precio),
    });

    setMensajeExito(true);

    setTimeout(() => {
      navigate("/inventario");
    }, 1200);
  };

  const claseBaseInput = (tieneError) =>
    `w-full rounded-lg border px-4 py-2.5 text-slate-800 transition-colors focus:ring-2 focus:outline-none ${
      tieneError
        ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-200"
        : "border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-100"
    }`;

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-blue-800">
          Agregar Producto
        </h1>
        <p className="text-slate-600">
          Registra un nuevo artículo completando los campos obligatorios.
        </p>
      </div>

      {mensajeExito && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 rounded-lg border border-emerald-300 bg-emerald-50 p-4 font-semibold text-emerald-800"
        >
          ✓ Producto guardado exitosamente. Redirigiendo al inventario...
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={manejarEnvio}
        noValidate
        className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        {/* Nombre */}
        <FormField
          id="nombre"
          label="Nombre del producto"
          error={errores.nombre}
        >
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ej: Fideos Spaghetti N°5"
            value={formulario.nombre}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? "nombre-error" : undefined}
            className={claseBaseInput(Boolean(errores.nombre))}
          />
        </FormField>

        {/* Marca */}
        <FormField id="marca" label="Marca" error={errores.marca}>
          <input
            id="marca"
            name="marca"
            type="text"
            placeholder="Ej: Lucchetti"
            value={formulario.marca}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.marca)}
            aria-describedby={errores.marca ? "marca-error" : undefined}
            className={claseBaseInput(Boolean(errores.marca))}
          />
        </FormField>

        {/* Tipo / Categoría */}
        <FormField id="tipo" label="Tipo de producto" error={errores.tipo}>
          <select
            id="tipo"
            name="tipo"
            value={formulario.tipo}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.tipo)}
            aria-describedby={errores.tipo ? "tipo-error" : undefined}
            className={claseBaseInput(Boolean(errores.tipo))}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Frutas y verduras">Frutas y verduras</option>
            <option value="Otros">Otros</option>
          </select>
        </FormField>

        {/* Stock y Precio */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField id="stock" label="Stock disponible" error={errores.stock}>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              placeholder="Ej: 20"
              value={formulario.stock}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.stock)}
              aria-describedby={errores.stock ? "stock-error" : undefined}
              className={claseBaseInput(Boolean(errores.stock))}
            />
          </FormField>

          <FormField
            id="precio"
            label="Precio unitario (CLP)"
            error={errores.precio}
          >
            <input
              id="precio"
              name="precio"
              type="number"
              min="1"
              step="1"
              placeholder="Ej: 1190"
              value={formulario.precio}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.precio)}
              aria-describedby={errores.precio ? "precio-error" : undefined}
              className={claseBaseInput(Boolean(errores.precio))}
            />
          </FormField>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Guardar Producto
          </button>
          <Link
            to="/inventario"
            className="rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 no-underline hover:bg-slate-100"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AgregarProducto;
