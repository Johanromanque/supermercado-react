import { Routes, Route } from "react-router";
import InventarioProvider from "./context/InventarioProvider";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import AgregarProducto from "./pages/AgregarProducto";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import NuestrasTiendas from "./pages/NuestrasTiendas";
import QuienesSomos from "./pages/QuienesSomos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <InventarioProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Navigation />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/agregar-producto" element={<AgregarProducto />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/tiendas" element={<NuestrasTiendas />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </InventarioProvider>
  );
}

export default App;
