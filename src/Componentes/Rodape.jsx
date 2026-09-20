import React from 'react';
import "../Styles/Rodape.css";


export default function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col col-about">
          <h3 className="footer-logo">Igreja Presbiteriana Renovada</h3>
          <p className="footer-text">
            Uma igreja de portas abertas para acolher, amar e transformar vidas através da Palavra de Deus.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>

        <div className="footer-col col-links">
          <h4 className="col-title">Navegação</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#comentarios">Comentários</a></li>
            <li><a href="#ao-vivo">Transmissão ao Vivo</a></li>
          </ul>
        </div>

        <div className="footer-col col-contact">
          <h4 className="col-title">Atendimento e Cultos</h4>
          <p>📍 <strong>Endereço:</strong> Rua Principal, N° 100 - Centro</p>
          <p>📞 <strong>Telefone:</strong> (00) 99999-9999</p>
          <p>⛪ <strong>Cultos:</strong> Domingos às 19h | Quarta às 19h30</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Igreja Presbiteriana Renovada. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}