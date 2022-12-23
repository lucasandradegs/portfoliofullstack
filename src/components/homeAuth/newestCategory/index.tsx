import useSWR from "swr";
import projetService from "../../../services/projectService";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";

const NewestCategory = function () {
    const { data, error } = useSWR("/newest", projetService.getNewestProjects);

    if(error) return error;
    if(!data) return (<><p>Loading...</p></>);
    
    return <>
        <p className={styles.titleCategory}>MAIS RECENTES</p>
        <SlideComponent project={data.data}/>
    </>;
};

export default NewestCategory