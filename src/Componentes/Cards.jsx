import "../Styles/Home.css";
import fbase from "../assets/Fbase.png"; // única imagem usada em todos os cards

export default function Cards() {
  return (
    <div className="cards">
      {/* Card 1 - Culto da Família */}
      <div className="card">
        {/* <img src={} alt="Culto da Família" className="card-img" /> */}
        <h3>Culto da Família</h3>
        <p>25 de Maio • 19:00</p>
        <p>Local: Templo Sede</p>
        <button>Saiba Mais</button>
      </div>

      {/* Card 2 - Vigília de Oração */}
      <div className="card">
        {/* <img src={fbase} alt="Vigília de Oração" className="card-img" /> */}
        <h3>Vigília de Oração</h3>
        <p>31 de Maio • 22:00</p>
        <p>Local: Templo Sede</p>
        <button>Saiba Mais</button>
      </div>

      {/* Card 3 - Encontro de Jovens */}
      <div className="card">
        {/* <img src={fbase} alt="Encontro de Jovens" className="card-img" /> */}
        <h3>Encontro de Jovens</h3>
        <p>08 de Junho • 16:00</p>
        <p>Local: Salão Social</p>
        <button>Saiba Mais</button>
      </div>
    </div>
  );
}
