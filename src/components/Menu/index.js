import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import './Menu.css';
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu(){
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="rodrixflix logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;