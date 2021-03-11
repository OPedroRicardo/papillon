import { Carousel } from "./Carousel"

import style from "../styles/components/Products.module.css"

export function Products() {
    return(
        <span className={style.ProductsContainer}>
            <Carousel />
            <Carousel />
            <Carousel />
        </span>
    )
}