import { BrowserRouter, Routes, Route } from "react-router";

import InventarioProvider from "./context/InventarioProvider";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NuestrasTiendas from "./pages/NuestrasTiendas";
import QuienesSomos from "./pages/QuienesSomos";
import NotFound from "./pages/NotFound";
import AgregarProducto from "./pages/AgregarProducto";
import Inventario from "./pages/Inventario";


function App() {
  return (
    <BrowserRouter>
      <InventarioProvider>
        <div className="flex min-h-screen w-full flex-col">
          <Navigation />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tiendas" element={<NuestrasTiendas />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/agregar-producto" element={<AgregarProducto />} />
              <Route path="/inventario" element={<Inventario />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </InventarioProvider>
    </BrowserRouter>
  );
}

export default App;
