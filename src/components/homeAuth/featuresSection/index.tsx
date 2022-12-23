import styles from "./styles.module.scss";
import useSWR from "swr";
import projetService, { ProjectType } from "../../../services/projectService";
import HeaderAuth from "../../../components/common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";

const FeaturedSection = function () {
    const { data, error } = useSWR("/featured", projetService.getFeaturedProjects);

    if(error) return error;
    if(!data) return (<><p>Loading...</p></>);

    return (
        <>
        {
            
             data.data?.map((project: ProjectType) => (
                <div style={{ backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${project.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "480px"
                 }} 
                 key={project.id}>
                    <HeaderAuth />
                    <Container className="pt-4">
                        <p className={styles.title}>{project.name}</p>
                        <p className={styles.description}>{project.synopsis}</p>
                        <Link className={styles.textUnderline} href={`/projects/${project.id}`}>
                            <Button outline color="light" className={styles.button}>
                                CONFIRA AGORA MEUS PROJETOS!
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