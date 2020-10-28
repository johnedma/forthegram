import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import UsersList from './components/UsersList';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Comments from './components/Comments';
import Footer from './components/Footer';

import UsersList from './components/UsersList';

import LoginForm from './components/LoginForm';
import AuthContext from './auth';
import PostForm from './components/PostForm';

// pass authenticated context to app
// comments can have commentIds and with commentIds we could create "conversations"
// "conversations" would just be comment reply chains within a particular post

const currentUser = {
    user: '2pac',
    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    posts: [

        {
            postId: "aaa",
            photo: "https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            // photo: "https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            likes: "57",
            comments: [
                {
                    user: '2pac',
                    comment: 'I make mistakes but learn from everyone. And when it’s said and done, I bet this brother be a better one. If I upset you, don’t stress. Never forget that God isn’t finished with me yet. - Ghetto Gospel feat Elton John'
                    , createdAt: "Oct 5th",
                    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
                },
                {
                    user: 'johnjohn',
                    comment: "trilla"
                    , createdAt: "Oct 5th",
                    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
                },
                {
                    user: "pk",
                    comment: "birdhouses are trill too"
                    , createdAt: "Oct 5th",
                    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
                },
                {
                    user: "tynaaaaaa",
                    comment: "t in Tyna stands for trill, duh"
                    , createdAt: "Oct 5th",
                    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
                },
                {
                    user: "adawg",
                    comment: "......."
                    , createdAt: "Oct 5th",
                    profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
                }
            ],
            hashtag: null
        },
        {
            postId: "aab",
            caption: 'Strength is overcome by weakness. Joy is overcome by pain. The night is overcome by brightness. And love—it remains the same. —Untitled #3',
            photo: "https://images.unsplash.com/photo-1583353858816-0b5850f04adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            likes: "107",
            comments: [
                {
                    user: 'johnjohn',
                    comment: "trilla"
                },
                {
                    user: "pk",
                    comment: "birdhouses are trill too"
                },
                {
                    user: "tynaaaaaa",
                    comment: "t in Tyna stands for trill, duh"
                },
                {
                    user: "adawg",
                    comment: "......."
                }
            ],
            hashtag: null
        },
        {
            postId: "aac",
            caption: 'I exist in the depths of solitude pondering my true goal. Trying 2 find peace of mind and still preserve my soul.” —In the Depths of Solitude',
            photo: "https://images.unsplash.com/photo-1603456372099-2e63deb29f9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            likes: "7",
            comments: [
                {
                    user: 'johnjohn',
                    comment: "trilla"
                },
                {
                    user: "pk",
                    comment: "birdhouses are trill too"
                },
                {
                    user: "tynaaaaaa",
                    comment: "t in Tyna stands for trill, duh"
                },
                {
                    user: "adawg",
                    comment: "......."
                }
            ],
            hashtag: null
        },
        {
            postId: "aad",
            caption: 'Even though you’re fed up, you gotta keep your head up. - Keep Ya Head Up',
            photo: "https://images.unsplash.com/photo-1603399880311-c20aa9c29caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            likes: "1007",
            comments: [
                {
                    user: 'johnjohn',
                    comment: "trilla"
                },
                {
                    user: "pk",
                    comment: "birdhouses are trill too"
                },
                {
                    user: "tynaaaaaa",
                    comment: "t in Tyna stands for trill, duh"
                },
                {
                    user: "adawg",
                    comment: "......."
                }
            ],
            hashtag: null
        },
    ]
}

// following Routes are for ease of access during current stage of dev
// will be restructured as individual pages are further structured

function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId
    };

    const logoutUser = async () => {
        const response = await fetchWithCSRF('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) setCurrentUserId(null);
    }
    // <li><a onClick={logoutUser} href="#" activeclass="active">Logout</a></li>
    return (

        <AuthContext.Provider value={authContextValue}>
            <BrowserRouter>
                <Navbar />
<<<<<<< HEAD
=======
                {/* <nav>
                    <ul>
                        <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                        <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                        <li><a onClick={logoutUser} href="#" activeclass="active">Logout</a></li>
                        <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    </ul>
                </nav> */}
>>>>>>> cf735d6... no changes
                <Switch>
                    <Route path="/users">
                        <>
                            <h1>currentUserId = {currentUserId}</h1>
                            <UsersList />
                        </>
                    </Route>
                    <Route path="/login" component={LogIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/post">
                        <h1>Posts</h1>
                        <Post currentUser={currentUser} />
                    </Route>
                    <Route path="/profile">
                        <Profile currentUser={currentUser} />
                    </Route>
                    <Route exact path="/">
                        <Home currentUser={currentUser} />
                    </Route>
                    <Route path="/create-post" component={PostForm} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
