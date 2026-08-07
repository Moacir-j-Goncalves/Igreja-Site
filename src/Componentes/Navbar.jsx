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

        <h5>Siga-nos</h5>

        <li className="redes">

          <button><FaFacebook /></button>
          <button><FaYoutube /></button>
          <button><FaInstagram /></button>
        
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;