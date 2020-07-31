import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import './Menu.css';
import ButtonLink from '../components/ButtonLink';

function Menu(){
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="rodrixflix logo"/>
            </a>
            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;