import styles from './Certified.module.css';
import Cards from './Cards';
import frontend from '../img/certifieds/frontend.svg';
import design from '../img/certifieds/design.svg';
import planejamento from '../img/certifieds/planejamento.svg';
import scrum from '../img/certifieds/scrum.svg';
import web from '../img/certifieds/web.svg';

function Certified(){
    return(
        <div id="Certified" className={styles.certified}>
            <header>
                <p>Certificados</p>
            </header>
                <Cards
                img={frontend}
                title="Introdução à Front-end com React.JS"
                text="Escola DNC"
                link="https://files.dnc.group/acervo/680/139318/052e60d5e499393930db8bde4cc1dd0a.pdf"
                ></Cards>
                <Cards
                img={design}
                title="Princípios de Design de Interface"
                text="Escola DNC"
                link="https://files.dnc.group/acervo/680/139318/fa6c05f40ce25e3ec12ce7636a3e00f8.pdf"
                ></Cards>
                <Cards
                img={scrum}
                title="Scrum Fundamentals Certified"
                text="SCRUMstudy - Accreditation Body for Scrum and Agile"
                link="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-Let%C3%ADciaSouzaSantanaMarinho-1012948.pdf"
                ></Cards>
                <Cards
                img={planejamento}
                title="Planejamento e Gestão de Projetos"
                text="Udemy"
                link="https://ude.my/UC-742819de-a7bb-403b-aa28-10129396e207"
                ></Cards>
                <Cards
                img={web}
                title="Introdução ao Desenvolvimento Web"
                text="Escola DNC"
                link="https://files.dnc.group/acervo/680/139318/95fa3839e65ee75022be7b9bbf8517f5.pdf"
                ></Cards>
        </div>
    )
}

export default Certified