import React from 'react';
import styled from 'styled-components';

const MinhaEstanteContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const MinhaEstante = () => {
  return (
    <MinhaEstanteContainer>
      <h1>Minha Estante</h1>
      <p>Veja sua coleção de itens ou livros.</p>
    </MinhaEstanteContainer>
  );
};

export default MinhaEstante;
