import logo from '../../assets/logo.png';
import './styles.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img' />
            <p><strong>Atlas</strong> Books</p>
        </div>
    );
};

export default Logo;