import './Header.scss';
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header className='header'>
            <Link to="/">
                <img className='header__logo default-brainFlix-logo' src={brainflixLogo} alt="brainflix-logo" />
            </Link>
            <section className='search-botton-icon-wrap'>
                <input className='header__search-bar' type="search" placeholder="Search" />
                <Link to='/upload'>
                    <button className='default-button header__upload-button' >UPLOAD</button>
                </Link>
                <div className='header__icon user-icon'></div>
            </section>
            

        </header>
    );
}

export default Header;