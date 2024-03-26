import Story from './Story';
import styles from './Experience.module.css'
import {useState} from 'react';
import australia from './img/fotos/australia.svg';
import into from './img/fotos/into.svg';
import cargo from './img/fotos/cargo.svg';
import ambu from './img/fotos/ambu.svg';
import replay from './img/fotos/replay.svg';
import snct from './img/fotos/snct.svg';

function Experience(){

    const [mostrar, setMostrar] = useState(false)

    function MostrarOn(){
        setMostrar(true)
    }

    function MostrarOff(){
        setMostrar(false)
    }


    return(
        <div id="Experience" className={styles.experience}>
            <header>
                <p>Experiências</p>
            </header>
            <body>
                <Story 
                title= "Competidora de robótica" 
                data="Jan 2018 - Jul 2022" 
                text="Fui competidora da equipe Albatroid - tricampeã do torneio de robótica First Lego League (região Centro-Oeste). Participei de um campeonato internacional na Austrália, onde fomos a equipe brasileira com maior pontuação no Desafio do Robô."  
                ></Story>
                <Story
                title="Programadora e gerente de projetos"
                data="Ago 2022 - Ago 2023"
                text="Programo desde os 14 anos e sou apaixonada pela robótica educacional. Dentro da Startup AXOLOTLS, programei em C++ e gerenciei projetos com o SCRUM."
                ></Story>
            </body>

                {mostrar === false &&(
                    <button onClick={MostrarOn}>Exibir imagens</button>
                )} 
                
                {mostrar === true &&(
                    <div>
                    <section>
                        <img src={australia}></img>
                        <img src={cargo}></img>
                        <img src={into}></img>
                        <img src={ambu}></img>
                        <img src={replay}></img>
                        <img src={snct}></img>
                    </section>
                        <button onClick={MostrarOff}>Omitir imagens</button>
                    </div>    
                )}
        </div>
    )
}

export default Experience