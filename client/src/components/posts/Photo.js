import React, { useState, useEffect } from 'react';

const Photo = ({pic}) => {
    //get url back from post data
    // const [ photo, setPhoto ] = useState(pic)


    return (
        <div>
            <img style={{
                paddingRight: "5px"
            }} alt='Not Found' src={pic}/>
        </div>
    )
}

export default Photo
