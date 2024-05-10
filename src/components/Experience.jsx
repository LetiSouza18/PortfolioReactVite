import Story from './Story';
import styles from './Experience.module.css'
import {useState} from 'react';
import Galery from './Galery';

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
                {mostrar === false &&(
                    <div>
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
                        <button onClick={MostrarOn}>Ver mais</button>
                    </div>
                )}  
                {mostrar === true &&(
                    <div>
                        <body>
                        <Story
                            title="Programadora e gerente de projetos"
                            data="Ago 2022 - Ago 2023"
                            text="Programo desde os 14 anos e sou apaixonada pela robótica educacional. Dentro da Startup AXOLOTLS, programei em C++ e gerenciei projetos com o SCRUM."
                            ></Story>
                            <Story
                            title= "Desenvolvedora Full Stack" 
                            data="Abr 2024 - atualmente" 
                            text="Faço parte do time de engenharia da startup Bcodex, que leva ao cliente soluções financeiras. Minhas funções são desenvolver e implementar o backoffice da empresa." 
                            ></Story>
                        </body>
                        <button onClick={MostrarOff}>Voltar</button>
                    </div>    
                )}

            <Galery></Galery>   
        </div>
    )
}

export default Experience