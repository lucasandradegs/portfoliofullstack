import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function() {
    return <>
        <p className={styles.sectionTitle}>MINHAS HABILIDADES/TECNOLOGIAS</p>
        <Container className='d-flex flex-wrap justify-content-center gap-4 pb-5'>
            <div className={styles.card1}>
                <p className={styles.cardTitle} >FRONT-END</p>
                <p className={styles.cardDescription}>
                    HTML, CSS, JavaScript, React, TypeScrypt.
                </p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle} >BACK-END</p>
                <p className={styles.cardDescription}>
                    JAVA, JAVASCRIPT, PHP
                </p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle} >BANCO DE DADOS</p>
                <p className={styles.cardDescription}>
                    MySQL WorkBench, Postgres
                </p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle} >OI</p>
                <p className={styles.cardDescription}>
                    MySQL WorkBench, Postgres
                </p>
            </div>
            <div className={styles.card5}>
                <p className={styles.cardTitle} >FORMAÇÃO</p>
                <p className={styles.cardDescription}>
                    MySQL WorkBench, Postgres
                </p>
            </div>
            <div className={styles.card6}>
                <p className={styles.cardTitle} >TESTE</p>
                <p className={styles.cardDescription}>
                    MySQL WorkBench, Postgres
                </p>
            </div>
        </Container>
    </>;
};

export default CardsSection;