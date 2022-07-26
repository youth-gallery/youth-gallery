import React from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

const CommentBox = () => {
    const postId = location.pathname.split('/')[3];
    console.log(postId);
    return (
        <>
            <CommentList postId={postId} />
            <Comment postId={postId} />
        </>
    );
};

export default CommentBox;
