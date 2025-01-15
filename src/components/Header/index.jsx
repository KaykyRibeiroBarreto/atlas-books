import React from 'react'
import Logo from '../logo/index';
import OpcoesHeader from '../OpcoesHeader/index';
import IconesHeader from '../IconesHeader/index';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;


const Header = () => {
    return (
      <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
    );
  };
  

export default Header;

