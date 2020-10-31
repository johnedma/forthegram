import React from 'react'

function Photo({ pic }) {
    return (
        <div>
            <img alt='NOT FOUND' src={pic} style={{
                width: "300px",
                height: "300px"
            }}/>
        </div>
    )
}

export default Photo
