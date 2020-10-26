import React from 'react';


function User(props) {
    return (
        <>
            <strong>Username:</strong> {props.user.user_name}<br />
            <strong>Name:</strong> {props.user.first_name} {props.user.last_name}<br />
            <strong>Member since:</strong> {props.user.created_at}<br />
        </>
    );
}
export default User;
