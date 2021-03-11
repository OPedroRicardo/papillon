import style from  '../styles/components/Banner.module.css';

export function Banner () {
    return (
        <span className={style.bannerContainer}>
            <img className={style.photo} src="pedralua.png" alt="Pedra da lua"/>
        </span>  
    )
}