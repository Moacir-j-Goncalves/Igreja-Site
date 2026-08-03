import fundo from "../assets/fbase.png";
import "../Styles/Hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="hero-conteudo">
        <h1>Juntos na fé,<br />transformados pelo amor.</h1>
        <p>Uma igreja de portas abertas para acolher, amar e transformar vidas através da palavra de Deus.</p>
        <button>PARTICIPE CONOSCO</button>
      </div>
    </section>
  );
}

export default Hero;
