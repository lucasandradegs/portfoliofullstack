import styles from "./styles.module.scss";
import { ProjectType } from "../../../services/projectService";

interface props {
    project: ProjectType;
}


const SlideCard = function ({project}: props) {
    return (
    <>
        <div className={styles.slide}>
            <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${project.thumbnailUrl}`} alt={project.name} className={styles.slideImg} />
            <p className={styles.slideTitle}>{project.name}</p>
            <p className={styles.slideDescription}>{project.synopsis}</p>
        </div>
    </>
    );
};

export default SlideCard;