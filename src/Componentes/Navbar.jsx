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

       <li className="redes">

          <button className="btn-facebook">
           <a
            href="https://www.facebook.com/IPRABREUELIMA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-facebook"
          >
            <FaFacebook />
          </a>
          </button>

          <button className="btn-youtube">
             <a
              href="https://www.youtube.com/@Iprabreuelima"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              <FaYoutube />
            </a>

          </button>

          <button className="btn-instagram">
                      <a
                href="https://www.instagram.com/iprabreuelima/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-instagram"
              >
                <FaInstagram />
              </a>
         </button>
        </li>
      </ul>

    </nav>
  );
}
<li className="redes">

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-facebook"
  >
    <FaFacebook />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-youtube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.instagram.com/iprabreuelima/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-instagram"
  >
    <FaInstagram />
  </a>

</li>
export default Navbar;