import "../Styles/Eventos.css";

function Eventos() {
  const eventos = [
    {
      titulo: "Culto da Família",
      data: "Domingo - 19:00",
      local: "Templo Sede"
    },
    {
      titulo: "Culto de Oração",
      data: "Quarta - 19:30",
      local: "Templo Sede"
    },
    {
      titulo: "Culto de Jovens",
      data: "Sábado - 19:00",
      local: "Templo Sede"
    }
  ];

  return (
    <section className="eventos">
      <h2>Próximos Eventos</h2>

      <div className="cards">

        {eventos.map((evento, index) => (
          <div className="card" key={index}>

            <h3>{evento.titulo}</h3>

            <p><strong>Data:</strong> {evento.data}</p>

            <p><strong>Local:</strong> {evento.local}</p>

            <button>Saiba Mais</button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Eventos;