import style from  '../styles/components/GuideMenu.module.css';

export function GuideMenu() {
    return(
        <div className={style.GuideMenuContainer}>
        <a href="">Home</a>
        <br/>
        <a href="">Sobre nós</a>
        <br/>
        <a href="">Pedras e significados</a>
        <br/>
        <a href="">Redes sociais</a>
        </div>
    )
}