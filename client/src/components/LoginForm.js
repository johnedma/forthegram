import React, {useState, useContext} from 'react';
import AuthContext from '../auth'

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const {fetchWithCSRF} = useContext(AuthContext);
    const submitForm = (e) => {
        e.preventDefault();

        async function loginUser() {
            console.log("top of async loginuser function");
            const response = await fetchWithCSRF(`/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password
                })
            });
            console.log("after awaited fetch call, response.ok = ", response.ok)

            const responseData = await response.json();
            console.log("after awaited #json call")
            if (!response.ok) setErrors(responseData.errors);
            console.log(responseData);
        }
        console.log("before invocation of loginUser");
        loginUser();
        console.log("after invocation of loginUser");
    }
    return (
        <form onSubmit={submitForm}>
            {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
            <div className="field">
                <label>Username: </label>
                <div className="control">
                    <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                </div>
                <label>Password: </label>
                <div className="control">
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                </div>
            </div>
            <button>Login</button>
        </form>
    );
}
export default LoginForm;
