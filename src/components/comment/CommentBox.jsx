import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import CommentList from './CommentList';

const CommentBox = ({ postUserName }) => {
    let { post_id } = useParams();
    console.log(post_id);
    return (
        <>
            <CommentList postId={post_id} />
            <Comment postId={post_id} postUserName={postUserName} />
        </>
    );
};

export default CommentBox;
