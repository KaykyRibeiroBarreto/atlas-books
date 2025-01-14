import './styles.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesHeader = () => {
  return (
    <div>
      <ul className='opcoes'>
           {textoOpcoes.map((opcao, index) => (
            <li className='opcao' key={index}>
               <p>{opcao}</p>
           </li>
           )   )  }    
           </ul>
    </div>
  )
}

export default OpcoesHeader;
