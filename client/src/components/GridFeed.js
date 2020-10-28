import React from 'react';

const GridFeed = ({ currentUser }) => {
    const chunk = (input, size) => {
        return input.reduce((arr, item, idx) => {
            return idx % size === 0
                ? [...arr, [item]]
                : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
        }, []);
    };
    // const splitEvery = (array, length) =>
    //     array.reduce(
    //         (result, item, index) => {
    //             if (index % length === 0) result.push([])
    //             result[Math.floor(index / length)].push(item)
    //             return result
    //         },
    //         []
    //     )
    //   return (
    //     <div>
    //     {
    //       splitEvery(users, 3).map(usersChunk => (
    //         <div className="columns">
    //           { usersChunk.map( user => (
    //               <div className="column">
    //                 <User key={user.id} id={user.id} name={user.name} />
    //               <div>
    //             ))
    //           }
    //         </div>
    //       )
    //     }
    //     </div>
    //   )
    // let postsChunk = splitEvery(currentUser.posts, 3)
    let postsChunk = chunk(currentUser.posts, 3)
    // console.log(postsChunk)
    let photos = currentUser.posts.map(post =>
        <div>
            <img src={post.photo} key={post.postId} />
        </div>
    )
    return (
        //     display: `flex`,
        // <div className="photogrid tile is-ancestor" style={{
        //     flexFlow: `wrap`
        // }}>
        // postsChunk.map(post =>
        //     <div class="tile is-4 is-parent" style={{
        //         marginBottom: `28px`,
        //         marginRight: `28px`,
        //         // flex: `1 0 0%`,
        //         // display: `block`,
        //         position: `relative`,
        //         // width: `100%`
        //     }}>
        photos
        // <img src={post.photo} key={post.postId} />
        // </div>

        // )
        // };
        // </div>
    );
}
export default GridFeed;
