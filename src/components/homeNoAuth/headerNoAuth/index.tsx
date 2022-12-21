import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss"

const HeaderNoAuth = function () {
    return (
    <>
    <div className={styles.ctaSection}>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
        <p>Cadastre e apoie meu projeto!</p>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
    </div>
    <Container className={styles.nav}>
        <img src="/logop.svg" alt="logoDoPortfolio" className={styles.imgLogoNav}/>
        <div>
            <Link href="/login">
                <Button className={styles.navBtn} outline>
                    Entrar
                </Button>
            </Link>
            <Link href="/register">
                <Button className={styles.navBtn} outline>
                    Quero me cadastrar
                </Button>
            </Link>
        </div>
    </Container>
    </>
    );
};

export default HeaderNoAuth;