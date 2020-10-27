import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Placeholder Login imported from previous pj, needs to be reafactored for current implementation
const LogIn = () => {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    // const token = useSelector(state => state.authentication.token);
    // const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
    };

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    // if (token) {
    //     return <Redirect to="/" />;
    // }

    return (
        <main className="centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword} />
                <button type="submit">Login</button>
            </form>
        </main>
    );
};

export default LogIn;
