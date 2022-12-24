import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import projetService from "../../../services/projectService";
import SlideComponent from "../../common/slideComponent";
import PageSpinner from "../../common/spinner";


const FavoriteCategory = function () {
    const { data, error } = useSWR("/favorites", projetService.getFavProjects);

    if(error) return error;
    if(!data) {
        return <PageSpinner />;
    }
    
    return (
    <>
        <p className={styles.titleCategory}>MINHA LISTA</p>
        {data.data.projects.length >= 1 ? (
            <SlideComponent project={data.data.projects}/>
        ) : (
            <p className="text-center pt-3 h5">
                <strong>Você ainda não tem nenhum projeto como favorito</strong>
            </p>
        )}
    </>
    )
};

export default FavoriteCategory;