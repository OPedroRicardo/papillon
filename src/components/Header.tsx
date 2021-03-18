import { useContext } from 'react';
import { GuideMenuContext } from '../contexts/GuideMenuContext';
import { MediaContext } from '../contexts/MediaContext';
import style from  '../styles/components/Header.module.css';
import { GuideMenu } from './GuideMenu';

export function Header() {
    const {
        isActive,
        openMenu,
        closeMenu,
    } = useContext(GuideMenuContext)

    const { 
        mediaWidth,
    } = useContext (MediaContext)

    return (
        <div className={style.HeaderContainer}>
            { isActive ? (
            <>
                <button onClick={closeMenu}><img src="closeIcon.svg" alt="Ícone do menu"/></button>
                <GuideMenu />
            </>
            ) : (
            <button onClick={openMenu}><img src="burguer.svg" alt="Ícone do menu"/></button>
            )}
            <input type="search" placeholder="Pesquisar..." />
            {  mediaWidth > 768 ? <img src="papillonLogotype.svg" alt="Papillon" />
            :
            <img src="papillonLightLogo" alt="Papillon"/>
            }
            
        </div>
    )
}