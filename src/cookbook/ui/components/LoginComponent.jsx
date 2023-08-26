import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../security/AuthContext";

function LoginComponent() {

    const [username, setUsername] = useState("Rory")
    const [password, setPassword] = useState(null)
    const [isFailedLogin, setFailedLogin] = useState(false)
    const navigate = useNavigate()

    const authContext = useAuth()
    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            setFailedLogin(false)
            navigate('/recipes')
        } else {
            setFailedLogin(true)
        }
    }

    return (
        <div className="Login">
            {isFailedLogin && <div>Failed Login</div>}
            <div className="LoginForm">
                <div>
                    <label>User name</label>
                    <input type="text" name="username" value={username} onChange={handleChangeUsername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChangePassword}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}
export default LoginComponent