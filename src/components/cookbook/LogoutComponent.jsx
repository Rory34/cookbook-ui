import {useContext} from "react";
import {AuthContext} from "./security/AuthContext";

function LogoutComponent() {

    const useAuth = useContext(AuthContext)
    useAuth.logout()
    return (
        <div>Logged Out</div>
    )
}
export default LogoutComponent