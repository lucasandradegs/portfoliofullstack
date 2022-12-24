import styles from "./styles.module.scss";
import useSWR from "swr";
import projetService, { ProjectType } from "../../../services/projectService";
import HeaderAuth from "../../../components/common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";
import PageSpinner from "../../common/spinner";

const FeaturedSection = function () {
    const { data, error } = useSWR("/featured", projetService.getFeaturedProjects);

    if(error) return error;
    if(!data) {
        return <PageSpinner />
    }

    return (
        <>
        {
            
             data.data?.map((project: ProjectType) => (
                <div className={styles.backGroundImg}
                 key={project.id}
                 >
                    <HeaderAuth />
                    <Container className="pt-4">
                        <p className={styles.title}>{project.name}</p>
                        <p className={styles.description}>{project.synopsis}</p>
                        <Link className={styles.textUnderline} href={`/project/${project.id}`}>
                            <Button outline color="light" className={styles.button}>
                                CONFIRA AGORA OS PROJETOS COMPLETOS!
                                <img src="/buttonPlay.svg" alt="buttomImg" className={styles.buttonImg} />
                            </Button>
                        </Link>
                    </Container>
                </div>
            ))[0]
            
        } 
        </>
    ) 
}
export default FeaturedSection;