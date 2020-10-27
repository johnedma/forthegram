import React , {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UsersList';
import LoginForm from './components/LoginForm';
import AuthContext from './auth';


function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId
    };

    const logoutUser = async ()=> {
        const response = await fetchWithCSRF('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if(response.ok) setCurrentUserId(null);
}

    return (
        <AuthContext.Provider value={authContextValue}>
            <BrowserRouter>
                <Navbar />
                <nav>
                    <ul>
                        <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                        <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                        <li><a onClick={logoutUser} href="#" activeclass="active">Logout</a></li>
                        <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/users">
                        <>
                        <h1>currentUserId = {currentUserId}</h1>
                        <UserList />
                        </>
                    </Route>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/">
                        <h1>My Home Page</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
