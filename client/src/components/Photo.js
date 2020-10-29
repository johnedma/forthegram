import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"


const Photo = () => {
    let history = useHistory();
    const { currentUserId } = useContext(AuthContext)
    const [file, setFileName] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);
    console.log(file)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Make the following an IIFE?
        async function submitForm() {
            const response = await fetch(`/api/posts`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                encType: "multipart/form-data",
                credentials: 'include',
                body: JSON.stringify({
                    file,
                    caption,
                    currentUserId
                })
            });

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                console.log(response)

                history.push('/')
            }
        }
        submitForm();
    }

    return (
        <div className="post-form-container">
            {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
            <h2 className="create-post-headline">New Post</h2>
            <form id="post-create-form" onSubmit={handleSubmit} >

                <input type="file" name="file" onChange={(e) => setFileName(e.target.value)} />
                <textarea id="caption-field" onChange={(e) => setCaption(e.target.value)} name="caption" wrap="hard" rows="5" cols="33" placeholder="Write a Caption..." />
                <button id="create-post-button" type='submit'>Share</button>
            </form>
        </div>
    )
}

export default Photo;
