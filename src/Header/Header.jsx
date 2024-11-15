import '../styles/Header.scss';
import BashIcon from '../assets/bash-icon.svg';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'; // Если используете React Router
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx'; // Импортируем Sidebar

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__container-bash'>
                    <Link to='/bash' title='Корзина'>
                        <img src={BashIcon} alt='Bash Icon' />
                        <div className='header__container-bash--counter'>0</div>
                    </Link>
                </div>

                <div className='header__container-logo'>
                    <Link to='/' title='Home'>
                        <img src={Logo} alt='Logo' />
                    </Link>
                </div>

                <div className='header__container-info'>
                    <div className='header__container-user' title='User Profile'>
                        confusedSZN
                    </div>
                    <div onClick={toggleBurgerMenu} className='header__container-burger' aria-label='Menu'>
                        <span className='burger-line'></span>
                        <span className='burger-line'></span>
                        <span className='burger-line'></span>
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleBurgerMenu} />
        </header>
    );
}

export default Header;