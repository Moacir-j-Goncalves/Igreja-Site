import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import QuemSomos from "./Componentes/QuemSomos";
import Eventos from "./Componentes/Eventos";
import Home from "./Paginas/Home/home";


import "./Styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Eventos />
      <Home />
    </>
  );
}

export default App;