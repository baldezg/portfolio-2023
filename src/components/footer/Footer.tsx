
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://example.com/logo.png" alt="Company logo" />
        </div>
        <div className="footer-links">
          <Link to="/about">Sobre nós</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/privacy-policy">Política de privacidade</Link>
          <Link to="/terms-of-service">Termos de serviço</Link>
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/company" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/company" target="_blank" rel="noreferrer" >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/company" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/company" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copyright">
          © 2023 Company. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;