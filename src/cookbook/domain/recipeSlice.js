import {createSlice} from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: [
            {
                id: 1,
                description: "R1",
                lastCooked: new Date(2023, 1, 2)
            },
            {
                id: 2,
                description: "R2",
                lastCooked: new Date(2023, 1, 3)
            },
            {
                id: 3,
                description: "R3",
                lastCooked: new Date(2023, 1, 4)
            }
        ]
    },
    reducers: {
        update: state => {
            state.recipes.find(r => r.id === 2).description = "Updated R2"
        }
    }
})

export const { update } = recipeSlice.actions
export default recipeSlice.reducer