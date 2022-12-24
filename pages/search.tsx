import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import projetService, { ProjectType } from "../src/services/projectService";

const Search = function () {
    const router = useRouter();
    const searchName: any = router.query.name;
    const [searchResult, setSearchResult] = useState<ProjectType[]>([]);

    const searchProjects = async function () {
        const res = await projetService.getSearch(searchName);
        setSearchResult(res.data.projects);
    };    

    useEffect(() => {
        searchProjects();
    }, [searchName]);


    return (
        <>
        <Head>
            <title>Portfólio - {searchName}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <HeaderAuth />
            {searchResult?.map((project) => (
	        <div key={project.id}>
	            <p>{project.name}</p>
            </div>
         ))}
        </main>
        </>
    );
};

export default Search;