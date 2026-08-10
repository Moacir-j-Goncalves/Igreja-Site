import "../Styles/Navbar.css";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../assets/Ipral-icon.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <img src={logo} alt="Logo" />

      </div>
      <div class className ="cabeçalho">
          <h2>Igreja Prebiteriana Renovada</h2>
      </div>


      <ul className="menu">

        <li>Início</li>
        <li>Quem Somos</li>
        <li>Eventos</li>
        <li>Comentários</li>

        <h4>Redes sociais</h4>

       <li className="redes">
          <button className="btn-facebook">
            <FaFacebook />
          </button>

          <button className="btn-youtube">
            <FaYoutube />
          </button>

          <button className="btn-instagram">
            <FaInstagram />
          </button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;