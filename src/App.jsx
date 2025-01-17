import styled from 'styled-components';
import { Outlet } from 'react-router-dom'; // Para renderizar as páginas das rotas filhas
import Header from './components/Header';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgb(5, 0, 88);
  background: linear-gradient(
    90deg,
    rgba(5, 0, 88, 1) 0%,
    rgba(0, 0, 157, 1) 32%,
    rgb(9, 83, 194) 100%
  );
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1; // Ocupa o espaço restante da tela
  padding: 20px; // Espaçamento interno
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza o conteúdo horizontalmente
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Outlet /> 
      </MainContent>
    </AppContainer>
  );
}

export default App;
