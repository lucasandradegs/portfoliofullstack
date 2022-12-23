import api from "./api";
import { ProjectType } from "./projectService";

export type CategoryType = {
    id: number,
    name: string,
    position: number;
    projects?: ProjectType[];
};

const categoriesService =  {
    getCategories: async () => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.get("/categories", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    getProjects: async (id: number) => {
        const token = sessionStorage.getItem("portfolio-token");

        const res = await api.get(`/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
};

export default categoriesService;