import styled from 'styled-components'
import { NavLink, Link } from "react-router"

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background-color: #ffffff;
`

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
`

export const Navigation = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: #1a365d;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #2b4c7e;
  
    &.active {
    font-weight: bold;
    color: #f39c12; 
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1a365d;
  transition: color 0.2s;

  &:hover {
    color: #2b4c7e;
  }

  &:focus {
    outline: 2px solid #2b4c7e;
    outline-offset: 2px;
  }
`

