import styled from 'styled-components';
import React, { useState } from 'react';
import Header from './components/Header';
import SearchComponent from './components/SearchComponent';
import { Title } from './components/SearchComponent';
import { Subtitle } from './components/SearchComponent';

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
        <Title>Bem-vindo ao Atlas Books</Title>
        <Subtitle>Encontre os melhores livros aqui!</Subtitle>
       < SearchComponent />
      </MainContent>
    </AppContainer>
  );
}

export default App;
