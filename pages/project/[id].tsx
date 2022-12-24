import styles from "../../styles/projectPage.module.scss";
import Head from "next/head";
import HeaderAuth from "../../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import projetService, { ProjectType } from "../../src/services/projectService";

const ProjectPage = function () {
    const [project, setProject] = useState<ProjectType> ();
    const router = useRouter();
    const {id} = router.query;

    const getProject = async function () {
        if(typeof id !== "string") return;

        const res = await projetService.getVideos(id);

        if(res.status === 200) {
            setProject(res.data);
        }
    };

    useEffect(()=>{
        getProject();
    },[id])

    return (
        <>
            <Head>
                <title>Portfólio - {project?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
                <p>{project?.name}</p>
            </main>
        </>
    );
};

export default ProjectPage;