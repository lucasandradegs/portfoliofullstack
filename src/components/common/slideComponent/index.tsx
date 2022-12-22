import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { ProjectType } from '../../../services/projectService';
import SlideCard from '../slideCard';

interface props {
    project: ProjectType[];
}

const SlideComponent = function ({ project }:props) {
    return <>
    <div>
        <Splide options={{
            type:"loop",
            perPage: 4,
            perMove: 1,
            pagination: false,
        }}>
          {project?.map((project)=>(
            <SplideSlide key={project.id}>
                <SlideCard project={project} />
            </SplideSlide>
          ))}
        </Splide>
    </div>
    </>;
};

export default SlideComponent;