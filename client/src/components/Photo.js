import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"


const Photo = () => {
    let history = useHistory();
    const { currentUserId } = useContext(AuthContext)
    const [file, setFileName] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make the following an IIFE?
        async function submitForm() {
            let formData = new FormData();
            formData.append('file', file);
            let captionURI = encodeURIComponent(caption)
            console.log(captionURI)
            const response = await fetch(`/api/posts/${currentUserId}/${captionURI}`, {
                method: 'POST',
                // headers: {
                //     "Content-Type": "multipart/form-data",
                //     "type": "formData"
                // },

                body: formData
            });

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                console.log(responseData)

                history.push('/')
            }
        }
        submitForm();
    }

    return (
        <div className="post-form-container">
            {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
            <h2 className="create-post-headline">New Post</h2>
            <form id="post-create-form" onSubmit={handleSubmit} encType="multipart/form-data">

                <input type="file" name="file" onChange={(e) => setFileName(e.target.files[0])} />
                <textarea id="caption-field" onChange={(e) => setCaption(e.target.value)} name="caption" wrap="hard" rows="5" cols="33" placeholder="Write a Caption..." />
                <button id="create-post-button" type='submit'>Share</button>
            </form>
        </div>
    )
}

export default Photo;
