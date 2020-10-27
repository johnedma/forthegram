import React , {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UsersList';
import LoginForm from './components/LoginForm';
import AuthContext from './auth';


function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const authContextValue = {
        fetchWithCSRF,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <BrowserRouter>
                <Navbar />
                <nav>
                    <ul>
                        <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                        <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                        <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/users">
                        <UserList />
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
