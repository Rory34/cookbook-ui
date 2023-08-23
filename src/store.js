import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core"
import recipeReducer from "./cookbook/domain/recipeSlice";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        recipe: recipeReducer
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)
export default store;