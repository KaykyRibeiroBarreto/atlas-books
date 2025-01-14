import Logo from './components/logo/index';
import './App.css';
import User from './assets/user.png';
import Cart from './assets/cart.png';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [User, Cart ]

function App() {
  return (
    
      <div className='App'>
        <header className='App-header'>
           <Logo />
           <ul className='opcoes'>
           {textoOpcoes.map((opcao, index) => (
            <li className='opcao' key={index}>
               <p>{opcao}</p>
           </li>
           ))}    
           </ul>

           <ul className='icones'>
           {icones.map((icone, index) => (
            <li className='icone' key={index}>
               <img className='icone' src={icone} alt='icone' />
           </li>
           ))}    
           </ul>
          </header>
      </div>
    
  )
}

export default App
