import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import './Menu.css';

function Menu(){
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="rodrixflix logo"/>
            </a>
        </nav>
    );
}

export default Menu;