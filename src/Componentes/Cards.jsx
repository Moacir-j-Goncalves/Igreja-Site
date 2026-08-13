import "../Styles/Cards.css";
import ide from "../assets/IDE.jpeg";
import Conferencia from "../assets/Conferencia.png";
import EBF from "../assets/EBF.jpeg";

function Cards() {
  return (
    <section className="eventos">

      <h2>📅 PRÓXIMOS EVENTOS</h2>

      {/*====================================primeiro card ===========================================================*/}
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

      {/*========================================Segundo Card========================================================= */}

       <div className="evento">

          <img src={Conferencia} alt="evento" />
        <div className="evento-info">
          <h3>Conference: A Urgência do IDE</h3>
          <p></p>

          <p>📅 31 de Janeiro • 15h as 17h/19h as 21h</p>

          <p>📍 Igreja Presbiteriana Renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div>


      {/*{/*========================================terceiro Card==================================================== */}

       <div className="evento">

          <img src={EBF} alt="evento" />
        <div className="evento-info">
          <h3>EBF Escola Biblica de Férias</h3>
          <p></p>

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