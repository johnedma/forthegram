import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import AuthContext from '../auth'


const EditUser = props => {
    const { fetchWithCSRF, currentUserId, setCurrentUserId, currentUser } = useContext(AuthContext);
    const [email, setEmail] = useState(currentUser.email);
    const [username, setUsername] = useState(currentUser.user_name);
    const [fullname, setFullname] = useState(currentUser.full_name);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('')
    const [website, setWebsite] = useState(currentUser.website);
    const [bio, setBio] = useState(currentUser.bio);
    const [phone, setPhone] = useState(currentUser.phone);
    const [gender, setGender] = useState(currentUser.gender);
    // const token = useSelector(state => state.authentication.token);
    // const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    let history = useHistory();

    const submitForm = e => {
        e.preventDefault();

        // Make the following an IIFE?
        async function editUser() {
            const response = await fetchWithCSRF(`/api/users/${props.currentUserId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    username,
                    fullname,
                    password,
                    password2,
                    website,
                    bio,
                    phone,
                    gender
                })
            });

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                // setCurrentUserId(responseData.current_user_id)
                history.push('/users')
            }
        }
        editUser();
    }
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
                    <h2 style={{
                        color: `#8e8e8e`,
                        fontSize: `17px`,
                        fontWeight: `600`,
                        lineHeight: `20px`,
                        margin: `0 40px 10px`,
                        textAlign: `center`
                    }}>Edit profile.</h2>
                    <div className="authFormInnerWrap">
                        <form onSubmit={submitForm}>
                            {errors.length ? errors.map(err => <li key={err} >{err}</li>) : ''}
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)} name="fullname" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)} name="username" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Website"
                                value={website}
                                onChange={e => setWebsite(e.target.value)} name="website" />
                            <textarea
                                className="input"
                                rows="4"
                                placeholder="Bio"
                                value={bio}
                                onChange={e => setBio(e.target.value)} name="bio"></textarea>
                            <input
                                className="input"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} name="email" />
                            <input
                                className="input"
                                type="number"
                                placeholder="Phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} name="phone" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                onChange={e => setGender(e.target.value)} name="gender" />
                            <input
                                className="input"
                                type="password"
                                placeholder="New password (required)"
                                value={password}
                                onChange={e => setPassword(e.target.value)} name="password" />
                            <input
                                className="input"
                                type="password"
                                placeholder="Confirm new password (required)"
                                value={password2}
                                onChange={e => setPassword2(e.target.value)} name="password2" />

                            <button type="submit" className="button has-background-link has-text-white" style={{
                                height: `2rem`,
                                paddingLeft: `.5em`,
                                paddingRight: `.5em`,
                                margin: `8px 40px`,
                                fontWeight: `600`

                            }}>Submit changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;