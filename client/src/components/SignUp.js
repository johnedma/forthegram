import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const SignUp = () => {
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
                        height: `51px`,
                        marginBlockStart: `1em`,
                        marginBlockEnd: `1em`
                    }}>Petstagram</h1>
                    <h2 style={{
                        color: `#8e8e8e`,
                        fontSize: `17px`,
                        fontWeight: `600`,
                        lineHeight: `20px`,
                        margin: `0 40px 10px`,
                        textAlign: `center`
                    }}>Sign up to see photos and videos from your friends.</h2>
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

                            }}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
