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
    };

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);


    return (
        <div className="authContain">
            <div className="authForm">
                <div className="authFormDiv">
                    <h1 style={{
                        margin: `22px auto 12px`,
                        fontSize: `3em`,
                        height: `20px`,
                        marginBlockStart: `1em`,
                        marginBlockEnd: `1em`
                    }}>Petstagram</h1>
                    <div className="authFormInnerWrap">
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

                            <button type="submit" class="button has-background-link has-text-white" style={{
                                height: `2rem`,
                                paddingLeft: `.5em`,
                                paddingRight: `.5em`,
                                margin: `8px 40px`,
                                fontWeight: `600`

                            }}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
