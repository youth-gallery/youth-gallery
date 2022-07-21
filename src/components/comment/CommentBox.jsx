import React from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

const CommentBox = () => {
    return (
        <>
            <CommentList />
            <Comment />
        </>
    );
};

export default CommentBox;
