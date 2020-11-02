import React, { useEffect, useContext } from 'react';
import PostContext from '../../PostContext'
import Photo from './Photo';
import RightSide from './RightSide';


function SinglePost(props) {
    const { postData, setPostData } = useContext(PostContext)


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/api${props.location.pathname}`)

                if (response.ok) {
                    const data = await response.json()
                    setPostData(data)
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [props.location.pathname, setPostData])
    if (!postData) return null
    return (
        <div style={{
            width: "500px",
            // margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "500px 100px",
        }} className='post-wrapper'>
            <Photo pic={postData.post.photo_url} />
            <RightSide />
        </div>
    )
}

export default SinglePost
