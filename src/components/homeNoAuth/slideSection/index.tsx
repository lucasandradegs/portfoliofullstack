import styles from "./styles.module.scss";
import { ProjectType } from "../../../services/projectService";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
    newestProjects: ProjectType[];
}


const SlideSection = function ( {newestProjects} : props) {
    return <>
    <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>MEUS PROJETOS E CONQUISTAS</p>
        <SlideComponent project={newestProjects} />
        <Link href="/register">
        <Button outline color="light" className={styles.slideSectionBtn}>
            Cadastra-se para me apoiar!
        </Button>
        </Link>
    </Container>
    </>;
};

export default SlideSection;