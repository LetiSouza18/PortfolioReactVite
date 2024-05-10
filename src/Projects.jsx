import Cards from "./Cards"
import styles from './Projects.module.css'
import lpdnc from './img/lpdnc.svg'
import portfolio from './img/portfolio.svg'
import api from './img/api.svg'

function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <header>
                <p>Projetos</p>
            </header>
            
            <Cards
            img={portfolio}
            title="Portfólio"
            text="Criação de um portfólio profissional com apresentação, experiências, habilidades e história. Tecnologias utilizadas: React e Bootstrap."
            link="https://portfolio-gamma-lilac-45.vercel.app"
            ></Cards>
            
            <Cards
            img={api}
            title="Consumo de API"
            text="Desenvolvimento de uma interface que fornece dados sobre endereço por meio da api VIACEP. Tecnologias utilizadas: HTML, Bootstrap e JavaScript nível avançado."
            link="https://api-teste-lemon.vercel.app"
            ></Cards>
            
            <Cards
            img={lpdnc}
            title="Landing Page"
            text="Criação de uma landing page para o lançamento da formação em tecnologia da escola DNC. Tecnologias utilizadas: HTML, CSS e JavaScript nível iniciante."
            link="https://landing-page-dnc.vercel.app"
            ></Cards>

        </div>
    )
}

export default Projects 