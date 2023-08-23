import { all, fork } from "redux-saga/effects"
import {watchRecipe} from "./cookbook/domain/RecipeSaga";

const rootSaga = function* () {
    yield all([
        fork(watchRecipe)
    ])
}

export default rootSaga;