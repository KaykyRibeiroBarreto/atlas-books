import Logo from './components/logo/index';
import './App.css';
import OpcoesHeader from './components/OpcoesHeader';
import IconesHeader from './components/IconesHeader';

function App() {
  return (
    
      <div className='App'>
        <header className='App-header'>
           <Logo />
           <OpcoesHeader />
          <IconesHeader />
           
          </header>
      </div>
    
  )
}

export default App
