import {apiClient} from "./ApiClient";

export const fetchRecipes = () => {
    console.log('adapter')
    return apiClient.get(`/recipes`)
        .then((response) => {
            console.log(response);
            return response.data;
        }
    );
}