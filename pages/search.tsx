import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import projetService, { ProjectType } from "../src/services/projectService";
import { Container } from "reactstrap";
import SearchCard from "../src/components/searchCard";
import Footer from "../src/components/common/footer";
import PageSpinner from "../src/components/common/spinner";

const Search = function () {
    const router = useRouter();
    const searchName: any = router.query.name;
    const [searchResult, setSearchResult] = useState<ProjectType[]>([]);
    const [loading, setLoading] = useState(true);
    const searchProjects = async function () {
        const res = await projetService.getSearch(searchName);
        setSearchResult(res.data.projects);
    };    

    useEffect(() => {
        searchProjects();
    }, [searchName]);


    useEffect(()=>{
        if(!sessionStorage.getItem('portfolio-token')){
            router.push("/login")
        } else {
            setLoading(false);
        }
    },[]);

    if (loading) {
        return <PageSpinner />
    }

    return (
        <>
        <Head>
            <title>Portfólio - {searchName}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
            <div className={styles.headerFooterBg}>
            <HeaderAuth />
            </div>
            {searchResult.length >= 1 ? (
                <div className={styles.searchContainer}>
                    <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                    {searchResult?.map((project) => (
                        <SearchCard key={project.id} project={project}/>
                 ))}
                </Container>
                </div>
             ) : (
            <div className={styles.searchContainer}>
                <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
            </div>
         )}
            <div className={styles.headerFooterBg}>
                <Footer />
            </div>
        </main>
        </>
    );
};

export default Search;