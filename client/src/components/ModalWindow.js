
import React, { useState, useContext } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"




const ModalWindow = props => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    const [preview, setPreview] = useState('')
    const { currentUserId } = useContext(AuthContext)
    const [file, setFileName] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);

    const onClose = e => {
        props.onClose && props.onClose(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(file.name)
        async function submitForm() {
            let formData = new FormData();
            formData.append('file', file);
            let captionURI = encodeURIComponent(caption)
            console.log(captionURI)
            const response = await fetch(`/api/posts/${currentUserId}/${captionURI}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                    "type": "formData"
                },

                body: formData
            });
            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                // console.log(responseData)

                history.push('/')
            }
        }
        submitForm();
    }

    const handleImage = e => {
        setFileName(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))

    }

    console.log(props.show)
    if (props.show === false) {
        return null;
    }
    return (
        <div className="modal-div" >
            <div className="button-container">
                <button className="toggle-button" onClick={onClose}>x</button>
            </div>
            <div className="post-form-container">
                {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
                <h2 className="create-post-headline">Create Post</h2>
                <form id="post-create-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    {file ? <img src={preview} id="img-post" /> : <input type="file" name="file" onChange={handleImage} />}
                    {file ? <textarea id="caption-field" onChange={(e) => setCaption(e.target.value)}
                        name="caption" wrap="hard" rows="5" cols="33" placeholder="Write a Caption..." /> : ''}
                    {caption ? <button id="create-post-button" type='submit'>Share</button> : ''}

                </form>
            </div>
        </div >
    );
}
export default ModalWindow