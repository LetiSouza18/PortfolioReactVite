import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';

function Navbar() {

    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Experience'>Experiências</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Contact'>Contato</Nav.Link></li>
            </ul>
        </div>
    )
}

export default Navbar