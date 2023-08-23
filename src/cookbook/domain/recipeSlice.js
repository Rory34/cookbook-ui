import {createSlice} from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: []
    },
    reducers: {
        loadRecipes: (state, {payload: recipes}) => {
            state.recipes = recipes.map(r => ({
                id: r.id,
                name: r.name,
                lastCooked: new Date(r.lastCooked)
            }));
        },
        updateRecipes: state => {
            state.recipes.find(r => r.id === 2).description = "Updated R2"
        }
    },

})

export const {loadRecipes, updateRecipes} = recipeSlice.actions
export default recipeSlice.reducer