import styles from "../../styles/projectPage.module.scss";
import Head from "next/head";
import HeaderAuth from "../../src/components/common/headerAuth";
import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import projetService, { ProjectType, VideoType } from "../../src/services/projectService";
import { Button, Container } from "reactstrap";
import PageSpinner from "../../src/components/common/spinner";
import VideoList from "../../src/components/videoList";
import Footer from "../../src/components/common/footer";
import Link from "next/link";


const ProjectPage = function () {
    const [project, setProject] = useState<ProjectType> ();
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const {id} = router.query;

    const getProject = async function () {
        if(typeof id !== "string") return;

        const res = await projetService.getVideos(id);

        if(res.status === 200) {
            setProject(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    };


    useEffect(()=>{
        getProject();
    },[id]);

    useEffect(()=>{
        if(!sessionStorage.getItem('portfolio-token')){
            router.push("/login")
        } else {
            setLoading(false);
        }
    },[]);

    const handleLikeProject = async ()=> {
        if (typeof id !== "string") return;
        
        if(liked === true) {
            await projetService.removeLike(id);
            setLiked(false);
        } else {
            await projetService.like(id);
            setLiked(true);
        }
    };

    const handleFavProject = async () => {
        if (typeof id !== "string") return;

        if(favorited === true) {
            await projetService.removeFav(id);
            setFavorited(false);
        } else {
            await projetService.addToFav(id);
            setFavorited(true);
        }
    };



    if (project === undefined) return <PageSpinner />;


    if (loading) {
        return <PageSpinner />
    };


    return (
        <>
            <Head>
                <title>Portfólio - {project?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div style={{ backgroundImage: `linear-gradient
                (to bottom, #6666661a, #151515), 
                url(${process.env.NEXT_PUBLIC_BASEURL}/${project?.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",}}>                   
                    <HeaderAuth />
                </div>  
                <div>
                <Container className={styles.projectInfo}>
                    <p className={styles.projectTitle}>{project?.name}</p>
                    <p className={styles.projectDescription}>{project?.synopsis}</p>                       
                                 
                    <div className={styles.interactions}>
                        {liked === false ? (
                        <img src="/course/iconLike.svg" 
                        alt="likeImage" 
                        className={styles.interactionsImages} 
                        onClick={handleLikeProject}
                        />): (
                        <img src="/course/iconLiked.svg" 
                        alt="likeImage" 
                        className={styles.interactionsImages} 
                        onClick={handleLikeProject}
                        />)}
                        {favorited === false ? (
                        <img src="/course/iconAddFav.svg" 
                        alt="likeImage" 
                        className={styles.interactionsImages} 
                        onClick={handleFavProject}
                        />): (
                        <img src="/course/iconFavorited.svg" 
                        alt="likeImage" 
                        className={styles.interactionsImages} 
                        onClick={handleFavProject}
                        />)}                   
                    </div>                   
                </Container>
                <Container className={styles.videoInfo}>
                    <p className={styles.videoDivision}>VIDEO(S)</p>
                    <p className={styles.videoLenght}>{project?.videos?.length} VIDEO(S) DE APRESENTAÇÃO</p>
                    {project?.videos?.length === 0 ? (
                        <p>
                            <strong>Este projeto/conquista não tem vídeo de aprensetação! &#x1F606;</strong>
                        </p>
                    ) : (project?.videos?.map((video) =>(
                        <VideoList key={video.id} video={video} project={project}/>
                    )))}
                </Container>
                </div>          
                <Footer />
            </main>
        </>
    );
};

export default ProjectPage;