import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { ProjectType } from '../../../services/projectService';
import SlideCard from '../slideCard';

interface props {
    project: ProjectType[];
}

const SlideComponent = function ({ project }:props) {
    let slideCount = 0;

    if (project.length > 4) {
        slideCount = 4;
    } else if (project) {
        slideCount = project.length;
    }


    return <>
    <div className="d-flex flex-column align-items-center py-4">
        <Splide options={{
            type:"loop",
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 300,
            pagination: false,
            arrows: project.length > 4 ? true : false,
            drag: project.length > 4 ? true : false,
            breakpoints: {
                1200: {
                    perPage: slideCount >= 2 ? 2 : 1,
                    width: slideCount >= 2 ? 600 : 300,
                    arrows: project.length > 2 ? true : false,
                    drag: project.length > 2 ? true : false,
                },
                600: {
                    perPage: 1,
                    width: 300,
                    arrows: project.length > 1 ? true : false,
                    drag: project.length > 1 ? true : false,
                },
                300: {
                    width: 250,
                },
            }
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