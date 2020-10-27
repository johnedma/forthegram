import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
// import UserList from './components/UsersList';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Comments from './components/Comments';
import UsersList from './components/UsersList';


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
                    , createdAt: "Oct 5th"
                },
                {
                    user: 'johnjohn',
                    comment: "trilla"
                    , createdAt: "Oct 5th"
                },
                {
                    user: "pk",
                    comment: "birdhouses are trill too"
                    , createdAt: "Oct 5th"
                },
                {
                    user: "tynaaaaaa",
                    comment: "t in Tyna stands for trill, duh"
                    , createdAt: "Oct 5th"
                },
                {
                    user: "adawg",
                    comment: "......."
                    , createdAt: "Oct 5th"
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

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/users">
                    <UsersList />
                </Route>

                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>

                <Route path="/post">
                    <Post currentUser={currentUser} />
                </Route>
                <Route path="/profile">
                    <Profile currentUser={currentUser} />
                </Route>
                <Route path="/">
                    <Home currentUser={currentUser} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
