import React, { useEffect, useContext } from 'react';
import PostContext from '../../PostContext'

import AddComment from './AddComment';
import CommentSection from './commentSection';
import Icons from './Icons';
import Header from './Header';
import LikedBy from './LikedBy';
import Photo from './Photo';
import RightSide from './RightSide';

const SinglePost = (props) => {
    const { postData, setPostData } = useContext(PostContext)
}
