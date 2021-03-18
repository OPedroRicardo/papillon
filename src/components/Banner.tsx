import style from  '../styles/components/Banner.module.css';

export function Banner () {
    return (
        <span className={style.bannerContainer}>
            <div>
                <h1>Onde <strong>a beleza</strong> <br/> te encontra.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <img src="pedralua.png" alt="Pedra da lua"/>
        </span>  
    )
}