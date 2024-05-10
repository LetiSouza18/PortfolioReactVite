import linkedin from '../img/icons/linkedin.svg';
import github from '../img/icons/github.svg';
import styles from './Contact.module.css';

function Contact (){
    return(
        <div id="Contact" className={styles.contact}>
            <ul>
                <li><a href='https://www.linkedin.com/in/letícia-souza-santana-marinho-605b601a7/'><img src={linkedin}></img></a></li>
                <li><a href='https://github.com/LetiSouza18'><img src={github}></img></a></li>
                <li>contato.leticiamarinho0@gmail.com</li>
            </ul>
            <p>Letícia Souza © 2024 All rights reserved </p>
        </div>
    )
}

export default Contact