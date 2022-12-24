import Link from "next/link";
import { ProjectType } from "../../services/projectService";
import styles from "./styles.module.scss";

interface props {
    project: ProjectType;
}

const SearchCard = function ({ project }: props) {
    return <>
        <Link className={styles.Link} href={`/projects/${project.id}`}>
            <div className={styles.searchCard}>
                <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${project.thumbnailUrl}`} 
                alt={project.name} 
                className={styles.searchCardImg}/>
                <p className={styles.searchCardName}>{project.name}</p>
                <p className={styles.searchCardDescription }>{project.synopsis}</p>
            </div>
        </Link>
    </>;
};

export default SearchCard;