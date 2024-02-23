import './Header.scss';
import brainflixLogo from '../../assets/images/logo/BrainFlix-logo.svg';

function Header(){
    return (
        <header className='header'>
            <img className='header__logo default-brainFlix-logo' src={brainflixLogo} alt="brainflix-logo" />
            <section className='search-botton-icon-wrap'>
                <input className='header__search-bar' type="search" placeholder="Search" />
                <button className='default-button header__upload-button' >UPLOAD</button>
                <div className='header__icon user-icon'></div>
            </section>
            

        </header>
    );
}

export default Header;