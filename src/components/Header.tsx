import hero from '../images/header.png';
import Navbar from './Navbar';
import './styles.css';


const Header: React.FC = () => {
    return (
        <div className='hero' id="home">
        <Navbar/>
            <img src={hero} className='image-hero'/>
            <div className='header'>
                <h1 className='title'>Reading is to the mind what exercise to the body. - Joseph Addison.</h1>
                <button type='button' className='button'>Choose my next book</button>
            </div>
        </div>
    )
}

export default Header;