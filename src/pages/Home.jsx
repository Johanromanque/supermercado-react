import HeroCard from "../components/HeroCard";
import ProductTable from "../components/ProductTable";
import useInventario from "../hooks/useInventario";
import { formatCLP } from "../utils/formatters";

function Home() {
  const { productos } = useInventario();

  const totalArticulos = productos.length;
  const stockCritico = productos.filter((p) => p.stock < 10).length;
  const valorTotalInventario = productos.reduce(
    (acum, p) => acum + p.precio * p.stock,
    0
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-12">
      <HeroCard />

      {/* Tarjetas KPI de Resumen */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
            Total de Productos
          </span>
          <p className="mt-2 text-3xl font-extrabold text-blue-900">{totalArticulos}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
            Alertas de Stock Crítico
          </span>
          <p className={`mt-2 text-3xl font-extrabold ${stockCritico > 0 ? "text-rose-600" : "text-emerald-600"}`}>
            {stockCritico} {stockCritico > 0 && "⚠️"}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
            Valorización Estimada
          </span>
          <p className="mt-2 text-2xl font-extrabold text-emerald-700">
            {formatCLP(valorTotalInventario)}
          </p>
        </div>
      </div>

      {/* Tabla en modo Resumen (sin botón de eliminar directo, solo los 5 más recientes) */}
      <ProductTable
        productos={productos}
        titulo="Resumen de Inventario Reciente"
        subtitulo="Últimos artículos registrados en la plataforma."
        mostrarAcciones={false}
        limite={5}
      />
    </section>
  );
}

export default Home;
