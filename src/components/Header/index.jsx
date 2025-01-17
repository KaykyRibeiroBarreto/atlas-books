import { ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/logo.png';
import {
  HeaderContainer,
  HeaderContent,
  LogoLink,
  LogoText,
  Navigation,
  StyledNavLink,
  IconsContainer,
  IconButton
} from './styles'

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink href="/">
        <img src={logo} alt='Atlas Books Logo' style={{ width: '2.5rem', height: '2.5rem' }}  />

          <LogoText>Atlas Books</LogoText>
        </LogoLink>

        <Navigation>
          <StyledNavLink to="/categorias">
            CATEGORIAS
          </StyledNavLink>
          <StyledNavLink to="/favoritos">
            FAVORITOS
          </StyledNavLink>
          <StyledNavLink to="/minha-estante">
            MINHA ESTANTE
          </StyledNavLink>
        </Navigation>

        <IconsContainer>
          <IconButton aria-label="Conta do usuário">
            <User size={20} />
          </IconButton>

          <IconButton aria-label="Carrinho de compras">
            <ShoppingCart size={20} />
          </IconButton>
          
        </IconsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;