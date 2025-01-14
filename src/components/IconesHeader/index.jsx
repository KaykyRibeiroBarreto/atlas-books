import User from '../../assets/user.png';
import Cart from '../../assets/cart.png';
import './styles.css';
const icones = [User, Cart]

const IconesHeader = () => {
  return (
    <div>
      <ul className='icones'>
           {icones.map((icone, index) => (
            <li className='icone' key={index}>
               <img className='icone' src={icone} alt='icone' />
           </li>
           ))}    
           </ul>
    </div>
  )
}

export default IconesHeader;
