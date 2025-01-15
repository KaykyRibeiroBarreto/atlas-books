import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(5, 0, 88);
  background: linear-gradient(90deg, rgba(5, 0, 88, 1) 0%, rgba(0, 0, 157, 1) 32%, rgb(9, 83, 194) 100%);

  li {
    list-style-type: none;
  }	
`;

function App() {
  return (
      <AppContainer>
        <Header />
      </AppContainer>
    
  )
}

export default App
