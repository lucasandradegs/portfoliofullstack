import useSWR from "swr";
import projetService from "../../../services/projectService";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import PageSpinner from "../../common/spinner";


const NewestCategory = function () {
    const { data, error } = useSWR("/newest", projetService.getNewestProjects);

    if(error) return error;
    if(!data) {
        return <PageSpinner />;
    }
    
    return <>
        <p className={styles.titleCategory}>MAIS RECENTES</p>
        <SlideComponent project={data.data}/>
    </>;
};

export default NewestCategory