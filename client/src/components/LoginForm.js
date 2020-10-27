import React, {useState, useContext} from 'react';
import AuthContext from '../auth'

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const {fetchWithCSRF} = useContext(AuthContext);
    const submitForm = (e) => {
        e.preventDefault();

        // Make the following an IIFE?
        async function loginUser() {
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

            const responseData = await response.json();
            console.log(responseData);
            if (!response.ok) setErrors(responseData.errors);
        }
        loginUser();
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
