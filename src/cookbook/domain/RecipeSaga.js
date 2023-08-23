import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchRecipes} from "../api/RecipeAdapter";
import {loadRecipes} from "./recipeSlice";

function* getRecipes() {
    const recipes = yield call(fetchRecipes);
    console.log('here')
    yield put(loadRecipes(recipes));
}

export function* watchRecipe() {
        yield takeEvery('GET_DATA', getRecipes)
}