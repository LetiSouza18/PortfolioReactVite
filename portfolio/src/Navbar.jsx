import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';
import {useState, useEffect} from 'react';

function Navbar() {
    const [horaAtual, setHoraAtual] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const data = new Date();
            const hora = data.getHours();
            const minutos = data.getMinutes();
            const segundos = data.getSeconds();
            const horaFormatada = `${hora}:${minutos}:${segundos}`;
            setHoraAtual(horaFormatada);
        }, 1000)

        return () => {
            clearTimeout(interval)
        }
        
    }, [])


    return(
        <div className={styles.navbar}>
            <p>A hora atual é {horaAtual}</p>
            <ul>
                <li><Nav.Link href='#Experience'>Experiências</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Contact'>Contato</Nav.Link></li>
            </ul>
        </div>
    )
}

export default Navbar