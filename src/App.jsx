import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Home from "./Componentes/Home";
import Cards from "./Componentes/Cards";
import QuemSomos from "./Componentes/QuemSomos";
import Comentarios from "./Componentes/Comentarios";
import "./Styles/App.css"; // certifique-se de importar o CSS

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="linha">
        <QuemSomos />
        <Cards />
        <Comentarios />
      </div>
    </>
  );
}

export default App;
