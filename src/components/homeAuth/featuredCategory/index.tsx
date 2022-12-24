import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import projetService from "../../../services/projectService";
import SlideComponent from "../../common/slideComponent";
import PageSpinner from "../../common/spinner";


const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", projetService.getFeaturedProjects);

    if(error) return error;
    if(!data) {
        return <PageSpinner />;
    }
    
    return <>
    <p className={styles.titleCategory}>EM DESTAQUE</p>
    <SlideComponent project={data.data}/>
    </>;
};

export default FeaturedCategory;