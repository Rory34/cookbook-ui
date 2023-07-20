import {createContext, useContext, useState} from "react";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(null)

    function login(username, password) {
        if (username.toLowerCase() === 'rory' && password === 'dummy') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(null)
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}