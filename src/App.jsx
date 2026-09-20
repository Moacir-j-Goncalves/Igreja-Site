import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Home from "./Paginas/Home";
import Cards from "./Componentes/Cards";
import QuemSomos from "./Componentes/QuemSomos";
import Comentarios from "./Componentes/Comentarios";
import ReallsInstagram from "./Componentes/RellsInstagram";
import Rodape from "./Componentes/Rodape";
import "./Styles/App.css"; // certifique-se de importar o CSS

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <QuemSomos /> */}

      <div className="linha">
        <ReallsInstagram />
        <Cards />
        <Comentarios />

      </div>

      {/* Componente Rodape abierto y cerrado correctamente */}
      <Rodape />
    </>
  );
}

export default App;