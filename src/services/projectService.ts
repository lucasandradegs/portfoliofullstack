import api from "./api";

export type VideoType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
};

export type ProjectType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    videos?: VideoType[];
};

const projetService = {
    getNewestProjects: async ()=>{
        const res = await api.get("/projects/newest").catch((error) => {
            console.log(error.response.data.message);

            return error.response;
        });

        return res;
    },

    getFeaturedProjects: async () => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.get("/projects/featured", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            console.log(error.response.data.message);

            return error.response;
        });

        return res;
    },
};

export default projetService;
