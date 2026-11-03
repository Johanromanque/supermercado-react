import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NuestrasTiendas from "./pages/NuestrasTiendas";
import QuienesSomos from "./pages/QuienesSomos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tiendas" element={<NuestrasTiendas />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
