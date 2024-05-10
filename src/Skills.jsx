
import styles from './Skills.module.css'
import javascript from './img/skills/javascript.svg'
import html from './img/skills/html.svg'
import css from './img/skills/css.svg'
import react from './img/skills/react.svg'
import bootstrap from './img/skills/bootstrap.svg'

function Skills(){
    return(
        <div className={styles.skill} id='Skills'>
            <p>Habilidades</p>
            <div>
                <img alt="" src={html}/>
                <img alt="" src={css}/>
                <img alt="" src={javascript}/>
                <img alt="" src={react}/>
                <img alt="" src={bootstrap}/>
                <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" />
            </div>
        </div>
    )
}

export default Skills