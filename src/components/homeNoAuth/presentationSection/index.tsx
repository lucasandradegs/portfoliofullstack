import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";


const PresentationSection = function () {
    return <>
    
    <Container className="py-4">
        <Row>
            <Col md className="d-flex flex-column justify-content-center align-items-start">
                <p className= {styles.subTitle}>CONHEÇA MEUS PROJETOS</p>
                <p className= {styles.title}>
                    Veja meus sitemas e com <br /> quais linguagens foram feitos.
                </p>
                <p className= {styles.description}>
                    Procuro oportunidades de emprego/projetos, <br /> entre em contato comigo!
                </p>
                <Link href="/register" className={styles.btnUnderline}>
                    <Button outline className={styles.btnCta}>
                        ENTRAR AGORA <img src="/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                    </Button>
                </Link>
            </Col>
            <Col md>
                <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation}/>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center pt-5">
                <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown}/>
            </Col>
        </Row>
    </Container>
    </>;
};

export default PresentationSection;