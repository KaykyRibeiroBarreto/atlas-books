import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Favoritos from './pages/Favoritos';
import MinhaEstante from './pages/MinhaEstante';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
  }
  li {
    list-style-type: none;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="minha-estante" element={<MinhaEstante />} />
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
