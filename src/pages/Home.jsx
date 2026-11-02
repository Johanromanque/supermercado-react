import HeroCard from "../components/HeroCard";
import ProductTable from "../components/ProductTable";
import { productos } from "../data/productos";

function Home() {
  return (
    <div className="container mt-4 mb-5 pb-5">
      <HeroCard />
      <ProductTable productos={productos} />
    </div>
  );
}

export default Home;
