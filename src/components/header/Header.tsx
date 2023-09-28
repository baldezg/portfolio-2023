import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.png';

type Props = {
  className: string,
  classLogo: string
}
const Header: React.FC<Props> = ({className, classLogo}) => {
  return (
      <header className={className}>
        <img className={classLogo} src={logo} alt="logo"/>
        <nav>
            <ul>
                <li>
                 <Link to="/about">Sobre Mim</Link> 
                </li>
                <li>
                 <Link to="/projects">Projetos</Link> 
                </li>
                <li>
                 <Link to="/playground">Contato</Link> 
                </li>
            </ul>    
        </nav>
    </header>
  );
}
export default Header;