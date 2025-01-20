import React, { useState } from 'react';
import styled from 'styled-components';
import InputComponent from '../InputComponent';


const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 35px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledInputComponent = styled(InputComponent)`
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContainer>
      
      <StyledInputComponent
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
