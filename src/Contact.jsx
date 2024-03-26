import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css'

function Contact (){
    return(
        <div id="Contact" className={styles.contact}>
            <ul>
                <li><a href='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/LetiSouza18'><FaGithub size={30}/></a></li>
                <li>contato.leticiamarinho0@gmail.com</li>
            </ul>
            <p>Letícia Souza © 2024 All rights reserved </p>
        </div>
    )
}

export default Contact