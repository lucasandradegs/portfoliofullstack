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

            return error.response;
        });

        return res;
    },

    addToFav: async (projectId: number | string) => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.post("/favorites", {projectId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) =>{
            return error.response;
        });

        return res;
    },
    removeFav: async (projectId: number | string) => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.delete(`/favorites/${projectId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
    getFavProjects: async () => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.get("/favorites", {
            headers: {Authorization: `Bearer ${token}`},
        }).catch((error) => {
            return error.response;
        });

        return res
    },

    getSearch: async (name: string)=> {
        const token = sessionStorage.getItem("portfolio-token");
    
        const res = await api.get(`/projects/search?name=${name}`, {
            headers: {Authorization: `Bearer ${token}`},
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    getVideos: async (id: number | string)=> {
        const token = sessionStorage.getItem("portfolio-token");
    
        const res = await api.get(`/projects/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    like: async (projectId: number | string) => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.post("/likes", {projectId} ,{
            headers: {Authorization: `Bearer ${token}`},
        }).catch((error) => {
            return error.response;
        });

        return res
    },

    removeLike: async (projectId: number | string) => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.delete(`/likes/${projectId}`, {
            headers: {Authorization: `Bearer ${token}`},
        }).catch((error) => {
            return error.response;
        });

        return res
    },
    
};

export default projetService;
