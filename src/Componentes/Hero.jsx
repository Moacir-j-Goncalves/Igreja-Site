import "../Styles/Hero.css";
import hero from "../assets/Fbase.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <div className="hero-text">
          <h1>
            Juntos na fé,
            <br />
            transformados pelo amor.
          </h1>

          <p>
            Uma igreja de portas abertas para acolher,
            amar e transformar vidas através da Palavra de Deus.
          </p>

          <button>PARTICIPE CONOSCO</button>
        </div>
      </div>
    </section>
  );
}