import "../Styles/Cards.css";

function Cards() {
  return (
    <section className="eventos">

      <h2>📅 PRÓXIMOS EVENTOS</h2>

      <div className="evento">

        <img src="..\assets\IDE.jpeg" alt="IDE" />

        <div className="evento-info">
          <h3>Conference: A urgência do IDE</h3>
          <p>Duas sessões</p>

          <p>📅 22 de Agosto • 17H e 19h</p>

          <p>📍 Igreja presbiteriana renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div>

{/* 
      <div className="evento">

        <img src="/vigilia.jpg" alt="Vigília de Oração" />

        <div className="evento-info">
          <h3>Louvozão Retrô</h3>

          <p>📅 27 de Julho • 19:00</p>

          <p>📍 Igreja presbiteriana renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div> */}

{/* 
      <div className="evento">

        <img src="/jovens.jpg" alt="Encontro de Jovens" />

        <div className="evento-info">
          <h3>EBF Escola Biblica de Férias</h3>

          <p>📅 20 de Julho • 14:00</p>

          <p>📍 Igreja presbiteriana renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div> */}
{/* 
      <div className="evento">

        <img src="/jovens.jpg" alt="Encontro de Jovens" />

        <div className="evento-info">
          <h3>Conferência</h3>

          <p>📅 31 de Janeiro • 15h as 17h/19h as 21h</p>

          <p>📍 Igreja presbiteriana renovada-Abreu e Lima</p>
        </div>

        <button>SAIBA MAIS</button>

      </div> */}

      <button className="todos-eventos">
        VER TODOS OS EVENTOS
      </button>

    </section>
  );
}

export default Cards;