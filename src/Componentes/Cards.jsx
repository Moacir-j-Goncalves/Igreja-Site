import "../Styles/Cards.css";
import ide from "../assets/IDE.jpeg";
import Conferencia from "../assets/Conferencia.png";

function Cards() {
  return (
    <section className="eventos">

      <h2>📅 PRÓXIMOS EVENTOS</h2>

      <div className="evento">

          <img src={ide} alt="evento" />
        <div className="evento-info">
          <h3>Conference: A Urgência do IDE</h3>
          <p>Duas sessões</p>

          <p>📅 22 de Agosto • 17H e 19h</p>

          <p>📍 Igreja Presbiteriana Renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div>

      <div className="evento">

       <div className="conferencia">

         <img src={Conferencia} alt="conferencia" />

        <div className="conferencia">
          <h3>Conferência</h3>

          <p>📅 31 de Janeiro • 15h as 17h/19h as 21h</p>

          <p>📍 Igreja Presbiteriana Renovada-Abreu e Lima</p>
        </div>

        </div>
        
        <button>SAIBA MAIS</button>

      </div> 

 
      <div className="evento">

        <img src="/jovens.jpg" alt="Encontro de Jovens" />

        <div className="evento-info">
          <h3>EBF Escola Biblica de Férias</h3>

          <p>📅 20 de Julho • 14:00</p>

          <p>📍 Igreja Presbiteriana Renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div> 

      <button className="todos-eventos">
        VER TODOS OS EVENTOS
      </button>

    </section>
  );
}

export default Cards;