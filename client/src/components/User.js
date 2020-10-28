import React from 'react';
import Photo from './Photo'



function User(props) {
    return (
        <>
            <strong>Username:</strong> {props.user.user_name}<br />
            <strong>Name:</strong> {props.user.first_name} <br />
            <strong>Member since:</strong> {props.user.created_at}<br />

        </>
    );
}
export default User;
