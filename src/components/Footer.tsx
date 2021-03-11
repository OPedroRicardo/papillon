import style from '../styles/components/Footer.module.css'

export function Footer() {
    return(
        <div className={style.FooterContainer}>
            <p>All rights reserved &#169;</p>
            <span>
                <p>Redes sociais:</p>
                <a href="https://www.instagram.com/papillonbijouxx/"><img src="instagramLogo.png" alt="Intagram"/></a>
                <a href=""><img src="whatsappLogo.png" alt="Whatsapp"/></a>
            </span>
        </div>
    )
}