import styles from './Cards.module.css'

function Card({img, title, text, link}){
    return(
        <div className={styles.cards}>
            <a href={link}><img src={img}></img></a>
            <section>
                <h1>{title}</h1>
                <p>{text}</p>
            </section>
        </div>
    )
}

export default Card