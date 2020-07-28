import React from 'react';
import Logo from '../../assets/img/auroraflix-logo.png';
import './menu.css';
import Button from '../button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Auroraflix-Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;