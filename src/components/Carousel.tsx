import style from  '../styles/components/Carousel.module.css';

import { Card } from '../components/Card';

export function Carousel () {
    return (
        <div className={style.CarouselContainer}>
            <div className={style.LeftArrow}><a href="#firstElement">&#60;</a></div>
            <a href="" id="firstElement"><Card /></a>
            <a href=""><Card /></a>
            <a href=""><Card /></a>
            <a href="" ><Card /></a>
            <a href="" id="lastElement"><Card /></a>
            <div className={style.RightArrow}><a href="#lastElement">&#62;</a></div>
        </div>
        
    )
}