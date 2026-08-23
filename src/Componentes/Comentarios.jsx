import "../Styles/Comentarios.css";

function Comentarios() {
  return (
    <section className="comentarios">

      <h2>💬 COMENTÁRIOS</h2>

      <div className="comentario">
        <div className="avatar">A</div>

        <div>
          <strong>Ana Clara</strong>

          <span>Há 2 dias</span>

          <p>
            O culto de domingo foi maravilhoso!
            A palavra falou muito ao meu coração.
          </p>

          <small>❤️ 12</small>
        </div>
      </div>


      <div className="comentario">
        <div className="avatar">M</div>

        <div>
          <strong>Marcos Silva</strong>

          <span>Há 3 dias</span>

          <p>
            Adorei a programação de jovens!
            Louvor, comunhão e palavra de qualidade.
          </p>

          <small>❤️ 8</small>
        </div>
      </div>


      <div className="comentario">
        <div className="avatar">J</div>

        <div>
          <strong>Juliana Santos</strong>

          <span>Há 5 dias</span>

          <p>
            A vigília de oração foi poderosa!
            Senti a presença de Deus.
          </p>

          <small>❤️ 15</small>
        </div>
      </div>

      <div className="comentario">
  <div className="avatar">P</div>
  <div>
    <strong>Pedro Almeida</strong>
    <span>Há 1 dia</span>
    <p>
      O culto de jovens foi incrível! Louvor cheio de energia e palavra edificante.
    </p>
    <small>❤️ 10</small>
  </div>
</div>

<div className="comentario">
  <div className="avatar">C</div>
  <div>
    <strong>Camila Rocha</strong>
    <span>Há 4 dias</span>
    <p>
      Participei do culto da família e senti muita paz. Foi uma bênção para todos nós.
    </p>
    <small>❤️ 7</small>
  </div>
</div>

      <button className="todos-comentarios">
        VER TODOS OS COMENTÁRIOS
      </button>


      
    </section>
  );
}

export default Comentarios;