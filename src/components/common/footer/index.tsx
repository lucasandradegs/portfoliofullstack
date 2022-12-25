import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
    return (
        <>
        <Container className={styles.footer}>
            <img src="/logoPortfolio.svg" alt="logoFooter" className={styles.footerLogo} />
            <a href="http://portfoliofullstack.com.br" target={"_blank"} className={styles.footerLink}>PORTFOLIOFULLSTACK.COM.BR</a>
        </Container>
        </>
    );
};

export default Footer;