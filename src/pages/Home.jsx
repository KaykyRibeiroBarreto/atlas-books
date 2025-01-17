import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Bem-vindo ao Atlas Books</h1>
      <p>Esta é a página principal!</p>
    </HomeContainer>
  );
};

export default Home;
