import { Link } from "react-router";

function NotFound() {
  return (
    <section
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 text-center"
      aria-labelledby="error-titulo"
    >
      <h1 className="mb-4 text-7xl font-extrabold text-blue-800 sm:text-8xl">
        404
      </h1>

      <h2 id="error-titulo" className="mb-4 text-2xl font-bold text-slate-800">
        Página no encontrada
      </h2>

      <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
        La dirección que ingresaste no existe en el supermercado. Puedes
        regresar a la página principal.
      </p>

      <Link
        to="/"
        className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-blue-800"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
