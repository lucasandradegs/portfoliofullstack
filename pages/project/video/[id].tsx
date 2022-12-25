import styles from "../../../styles/videoPlayer.module.scss";
import Head from "next/head";
import { useRouter} from "next/router";
import HeaderGeneric from "../../../src/components/common/headerGeneric";
import { useState, useEffect } from "react";
import projetService, { ProjectType } from "../../../src/services/projectService";
import PageSpinner from "../../../src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";

const VideoPlayer = function () {
    const router = useRouter();
    const [project, setProject] = useState<ProjectType>()
    const [loading, setLoading] = useState(true);
    const videoOrder = parseFloat(router.query.id?.toString() || "");
    const projectId = (router.query.projectid?.toString() || "");

    useEffect(()=>{
        if(!sessionStorage.getItem('portfolio-token')){
            router.push("/login")
        } else {
            setLoading(false);
        }
    },[]);

    const getProject = async function () {
        if (typeof projectId !== "string") return;

        const res = await projetService.getVideos(projectId);

        if(res.status === 200) {
            setProject(res.data);
        }
    };

    const handleLastVideo = () => {
        router.push(`/project/video/${videoOrder - 1}?projectid=${project?.id}`)
    };

    const handleNextVideo = () => {
        router.push(`/project/video/${videoOrder + 1}?projectid=${project?.id}`)
    };




    useEffect(() => {
        getProject();
    }, [projectId]);

    if (project?.videos === undefined) return <PageSpinner />;


    if (loading) {
        return <PageSpinner />
    }

    
    return (
        <>
            <Head>
                <title>Portfólio - {project.videos[videoOrder].name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderGeneric logoUrl="/home" btnContent={"Voltar para o projeto"} btnUrl={`/project/${projectId}`}/>
                <Container className="d-flex flex-column align-items-center gap-3 pt-5">
                    <p className={styles.videoTitle}>
                        {project.videos[videoOrder].name}
                    </p>
                    {typeof window === 'undefined' ? null : (
                        <ReactPlayer className={styles.player} 
                        url={`${process.env.NEXT_PUBLIC_BASEURL}/videos/stream?videoUrl=${project.videos[videoOrder].videoUrl}&token=${sessionStorage.getItem("portfolio-token")}`} controls />
                    )}
                    <div className={styles.videoButtonDiv} >
                        <Button className={styles.videoButton} disabled={videoOrder === 0 ? true : false} onClick={handleLastVideo}>
                            <img src="/episode/iconArrowLeft.svg" alt="setaEsquerda" className={styles.arrowImg} />
                        </Button>
                        <Button className={styles.videoButton} disabled={videoOrder + 1 === project.videos.length ? true : false} onClick={handleNextVideo}>
                            <img src="/episode/iconArrowRight.svg" alt="setaDireita" className={styles.arrowImg} />
                        </Button>
                    </div>
                    <p className="text-center py-4">{project.videos[videoOrder].synopsis}</p>
                </Container>
            </main>
        </>
    );
};

export default VideoPlayer;