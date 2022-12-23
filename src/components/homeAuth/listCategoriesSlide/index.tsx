import useSWR from "swr";
import categoriesService from "../../../services/categoriesService";
import SlideComponent from "../../common/slideComponent";
import styles from '../../../../styles/slideCategory.module.scss';

interface props {
    categoryId: number,
    categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
    const { data, error } = useSWR(`/categoriesProjects/${categoryId}`, () => categoriesService.getProjects(categoryId)
    );

    if(error) return error;
    if(!data) return (<><p>Loading...</p></>);
    
    return <>
    <p className={styles.titleCategory}>{categoryName}</p>
    <SlideComponent project={data.data.projects} />
    </>;
};

export default ListCategoriesSlide;