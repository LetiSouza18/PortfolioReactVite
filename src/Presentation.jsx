import styles from './Presentation.module.css'

function Presentation() {
    return(
        <div id="Presentation" className={styles.presentation}>
            <h1>Olá, eu sou a Letícia<br></br>
            Desenvolvedora Full-stack</h1>
            <h4>
                Graduanda em Computação Licenciatura pela Universidade de Brasília (UNB) e a <br/>
                caminho de me tornar uma desenvolvedora Full Stack; para isso, aprofundo-me <br/>
                diariamente em estudos sobre a criação de aplicações e softwares que cumpram<br/> 
                os requisitos desejados com eficiência. Tenho como objetivo atuar na área de <br/> 
                desenvolvimento de soluções para web dentro de uma empresa na qual eu possa <br/>
                crescer e aprender com profissionais experientes.
            </h4>
            <a href='https://www.linkedin.com/in/let%C3%ADcia-souza-santana-marinho-605b601a7/'><button>Conecte-se comigo!</button></a>
        </div>
    )
}

export default Presentation