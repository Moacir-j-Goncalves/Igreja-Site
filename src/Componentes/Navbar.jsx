import "../Styles/Navbar.css";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../assets/Ipral-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
          <img src="/Ipral-icon.png" alt="Logo da Igreja" /> Igreja prebiteriana Renovada
          
      </h2>

      <ul className="menu">
        <li>Início</li>
        <li>Quem Somos</li>
        <li>Eventos</li>
        <li>Comentários</li>
        <li>
          Redes Sociais
          <div className="icones">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
