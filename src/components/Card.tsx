import style from  '../styles/components/Card.module.css';

export function Card () {
    return (
        <span className={style.CardContainer}>
            <img src="pedralua.png" alt="Pedra da lua"/>
            <h3>Pulseira linda</h3>
            <strong>R$25,50</strong>
        </span>
    )
} 