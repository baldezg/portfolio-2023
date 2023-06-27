import './HomePage.css';
import vector from '../../assets/img/Vector 2.svg';
import { Chevron } from '../../icons';

const  HomePage: React.FC = () => {
  return (
    <main id='home' className='main'>
      <div className='text'>
        <div className='text__presentation'>
          <h1 className='presentation__name'>Olá! Me chamo, Gabriel Baldez</h1>
           <h2>Sou um desenvolvedor front-end apaixonado pelo o que faço!</h2>
          </div>
        <div className='text__description'>
            <h2>Posso ajudar sua empresa a alcançar os resultados desejados,</h2>
            <h2><span>criando as melhores soluções</span> e desenvolvendo aplicações</h2>
            <h2>sensacionais para o seu negócio.</h2>
            <h3>Pensando no cliente em primeiro lugar e imbuído em oferecer</h3>
            <h3>produtos de alta qualidade. Utilizo minhas habilidades em</h3>
            <h3>desenvolvimento web, web design e UX design para atender</h3>
            <h3>suas expectativas e satisfazer nossos clientes!</h3>
        </div>
        <div className='button__container'>
        <button>Conheça Meu Trabalho</button>
        <div className='arrow__div'>
          <Chevron className="icon"/>  
        </div>
        </div>
      </div>
      <div className='image'>
        <img className="vector" src={vector} alt="imagem de apoio"/>
      </div>
    </main>
  );
}

export default HomePage;