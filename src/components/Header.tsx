import { useContext } from 'react';
import { MenuGuideContext } from '../contexts/MenuGuideContext';

import style from  '../styles/components/Header.module.css';

export function Header() {
    const {
        isActive,
        openMenu,
    } = useContext(MenuGuideContext)

    return (
        <div className={style.HeaderContainer}>
            { isActive ? (
            <div className={style.MenuContainer} id="menu">
            <a href="">Home</a>
            <a href="">Sobre nós</a>
            <a href="">Pedras e significados</a>
            <a href="">Redes sociais</a>
            </div>
            ) : (
            <button onClick={openMenu}><img src="burguer.svg" alt="Ícone do menu"/></button>
            )}
            <input type="search" placeholder="Pesquisar..." />
            <img src="papillonLogotype.svg" alt="Papillon" />
        </div>
)}