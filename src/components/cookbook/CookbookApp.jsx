import './CookbookApp.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import ListRecipesComponent from "./ListRecipesComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    if (authContext.isAuthenticated)
        return children
    return <Navigate to="/"/>
}

export default function CookbookApp() {
    return (
        <div className="CookbookApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/recipes' element={
                            <AuthenticatedRoute>
                                <ListRecipesComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path='*' element={<ErrorComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

