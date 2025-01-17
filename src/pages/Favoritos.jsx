import React from 'react';
import styled from 'styled-components';

const FavoritosContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const Favoritos = () => {
  return (
    <FavoritosContainer>
      <h1>Seus Favoritos</h1>
      <p>Aqui estão os itens que você marcou como favorito.</p>
    </FavoritosContainer>
  );
};

export default Favoritos;
