import React from "react";
import styled from "styled-components";
import messageIcon from '../../assets/icon-message-circle-1.png';
import { Link } from 'react-router-dom';

const PostBtn = styled.button`
    width: 45px;
    height: 20px;
    padding-left: 10px;
`;

const CommentBtn = styled(PostBtn)`
    background: url(${messageIcon}) no-repeat left / 18px 18px;
    border: none;
    cursor: pointer;
    color: #767676;
`;

function PostComment({ datas_id, username, commentCount }) {
    return (
        <>
            {datas_id === datas_id ? (
                <Link to={`/post/${username}/${datas_id}`}>
                    <CommentBtn>{commentCount}</CommentBtn>
                </Link>
            ) : (
                <CommentBtn>{commentCount}</CommentBtn>
            )}
        </>
    );
}

export default PostComment;
