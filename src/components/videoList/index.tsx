import styles from "./styles.module.scss";

import { ProjectType, VideoType } from "../../services/projectService";
import { useRouter } from "next/router";

interface props {
    video: VideoType;
    project: ProjectType;
}

const VideoList = function ({ video, project }: props) {
    const router = useRouter();

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        function toString (num: number) {
            return num.toString().padStart(2, "0");
        }

        const result = `${toString(minutes)}:${toString(seconds)}`;

        return result;
    };

    const handleVideoPlayer = () =>{
        router.push(`/project/video/${video.order - 1}?projectid=${project.id}`);  
    };

    return (
        <>
        <div className={styles.videoCard} onClick={handleVideoPlayer}>
            <div className={styles.videoOrderTime}>
                <p className={styles.videoOrder}>Video de apresentação N.º {video.order}</p>
                <p className={styles.videoTime}>{handleSecondsToMin(video.secondsLong)}</p>
            </div>
            <div className={styles.videoTitleDescription}>
                <p className={styles.videoTitle}>{video.name}</p>
                <p className={styles.videoDescription}>
                {video.synopsis}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Itaque ratione modi soluta, temporibus debitis aliquam illo delectus at, nihil eos repellendus explicabo excepturi quo distinctio nemo est labore et quia, provident doloribus?
                Impedit, sapiente quos. Esse ut temporibus minus consectetur, cupiditate aut blanditiis ratione 
                illo natus iure, est maxime voluptatum. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae?</p>
            </div>
        </div>     
        </>     
    );
};

export default VideoList;