import style from  '../styles/components/GuideMenu.module.css';

export function GuideMenu() {
    return(
        <div className={style.GuideMenuContainer}>
        <a href="">Home</a>
        <a href="">Sobre nós</a>
        <a href="">Pedras e significados</a>
        <a href="">Redes sociais</a>
        </div>
    )
}