function ListRecipesComponent() {
    const recipes = [
        {id: 1, description: "R1", lastCooked: new Date(2023, 1, 2)},
        {id: 2, description: "R2", lastCooked: new Date(2023, 1, 3)},
        {id: 3, description: "R3", lastCooked: new Date(2023, 1, 4)}
    ]
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
                                <td>{r.description}</td>
                                <td>{r.lastCooked.toDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListRecipesComponent