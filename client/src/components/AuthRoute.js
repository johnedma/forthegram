import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from "../auth"

const ProtectedRoute = ({ component: Component, path, exact }) => {
    const { currentUserId } = useContext(AuthContext)
    // console.log("protected", currentUserId)
    return (
        <Route path={path} exact={exact} render={props => currentUserId ? <Redirect to="/" /> : <Component />} />

    )
}
//     const { isLoggedIn } = props;
//     if (token.length() < 112) {
//         return <Redirect to="/login" />;
//     }
//     return <Route {...props} />;
// }


export default ProtectedRoute
