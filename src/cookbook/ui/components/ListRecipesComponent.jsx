import {useSelector, useDispatch} from "react-redux"
import {updateRecipes} from '../../domain/recipeSlice'
import {useEffect} from "react";


function ListRecipesComponent() {

    const recipes = useSelector(state => state.recipe.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'GET_DATA'})
    },
    // eslint-disable-next-line
        [])
    return (
        <div className="container">
            <h1>Recipe List</h1>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Last Cooked</td>
                    </tr>
                    </thead>
                    <tbody>
                    {recipes.map(r => {
                        return (
                            <tr key={r.id}>
                                <td>{r.id}</td>
                                <td>{r.name}</td>
                                <td>{r.lastCooked.toDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div>
                <button
                    aria-label="Update"
                    onClick={() => dispatch(updateRecipes())}
                >Update</button>
            </div>

        </div>
    )
}

export default ListRecipesComponent