
import HeroCard from "../components/HeroCard";
import ProductTable from "../components/ProductTable";
import useInventario from "../hooks/useInventario";

function Home() {
  const { productos } = useInventario();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 pb-12">
      <HeroCard />
      <ProductTable productos={productos} />
    </section>
  );
}

export default Home;

