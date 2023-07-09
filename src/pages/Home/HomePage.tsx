import './HomePage.css';
import { Chevron, GithubLogo, LinkedinLogo } from '../../icons';

const  HomePage: React.FC = () => {
  return (
    <section className='hero__section'>
    <main id='home' className='main'>
      <div className='text'>
        <div className='text__presentation'>
          <h1 className='presentation__name'>Olá! Me chamo,<span className='name'>
            Gabriel Baldez</span> </h1>
           <h2>Sou um <span className='presentation__whatIdo'>desenvolvedor front-end</span> apaixonado pelo o que faço!</h2>
          </div>
        <div className='text__description'>
            <h2>Posso ajudar sua empresa a alcançar os resultados desejados,</h2>
            <h2><span>criando as melhores soluções</span> e desenvolvendo aplicações</h2>
            <h2>sensacionais para o seu negócio.</h2>
        </div>
        <div className='button__container'>
        <button>Entre em contato</button>
        <div className='arrow__div'>
          <Chevron className='icon'/>  
        </div>
        </div>
      </div>
    </main>
    <div className='socials'>
      <GithubLogo className='social__logo' />
      <LinkedinLogo className='social__logo' />
    </div>
  </section>
  // <section className='hero__section'>
  //   <main id='home' className='main'>
  //     <div className='text'>
  //       <div className='text__presentation'>
  //         <h1 className='presentation__name'>Olá! Me chamo, <span className='name'>Gabriel Baldez</span></h1>
  //          <h2>Sou um <span className='presentation__whatIdo'>desenvolvedor front-end</span> apaixonado pelo o que faço!</h2>
  //         </div>
  //       <div className='text__description'>
  //           <h2>Posso ajudar sua empresa a alcançar os resultados desejados,</h2>
  //           <h2><span>criando as melhores soluções</span> e desenvolvendo aplicações</h2>
  //           <h2>sensacionais para o seu negócio.</h2>
  //       </div>
  //       <div className='button__container'>
  //       <button>Entre em contato</button>
  //       <div className='arrow__div'>
  //         <Chevron className='icon'/>  
  //       </div>
  //       </div>
  //     </div>
  //   </main>
  //   <div className='socials'>
  //     <GithubLogo className='social__logo' />
  //     <LinkedinLogo className='social__logo' />
  //   </div>
  // </section>
  );
}

export default HomePage;