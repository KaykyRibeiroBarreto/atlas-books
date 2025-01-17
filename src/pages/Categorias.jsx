import React from 'react';
import styled from 'styled-components';

const CategoriasContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Categorias = () => {
  return (
    <CategoriasContainer>
      <h1>Página de Categorias</h1>
      <p>Explore as diferentes categorias disponíveis!</p>
    </CategoriasContainer>
  );
};

export default Categorias;
