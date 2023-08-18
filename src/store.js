import {configureStore} from "@reduxjs/toolkit";
import recipeReducer from "./cookbook/domain/recipeSlice";

export default configureStore({
    reducer: {
        recipe: recipeReducer
    }
})