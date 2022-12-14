import API from "../../API"
import {fetchCategoriesAction} from "./actions";

const api = new API();

export const fetchCategories = () => {
    return async (dispatch) => {
        return api.getCategories()
            .then((categories) => {
                dispatch(fetchCategoriesAction(categories.results));
            }).catch((error) => {
                alert("Failed to connect API: /categories/");
            });
    };
};