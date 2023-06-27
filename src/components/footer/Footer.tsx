import { Link } from 'react-router-dom';
import './Footer.css'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <nav>
                <section className="footer__aboutMe">
                    <Link to='/about'>Sobre Mim</Link>
                    <Link to='/projects'>Projetos</Link>
                </section>
                <section className="footer__socials">
                    <a href='https://github.com/GBaldez'>Github</a>
                    <a href='https://www.linkedin.com/in/gabriel-baldez/'>LinkedIn</a>
                    <a href='https://codepen.io/gbaldez'>CodePen</a> 
                </section>
                
            </nav>
        </footer>
    );
}
export default Footer;