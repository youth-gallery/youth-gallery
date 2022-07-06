import React from 'react';
import profile from '../assets/basic-profile.png';
import styled from 'styled-components';

const CommentDiv = styled.div`
    width: 390px;
    padding: 13px 18px 12px 16px;
    display: flex;
    justify-content: space-between;

    /* 경계가 불분명해서 추가. 실제 넣을 때는 빼면 됨 */
    border: 1px solid black;
`;

const CommnetInp = styled.input`
    width: 285px;
    border: none;
    font-size: 14px;

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: #c4c4c4;
    }
`;

const CommentImg = styled.img`
    width: 36px;
    height: 36px;
`;

const CommentBtn = styled.button`
    width: 56px;
    height: 28px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 15px;
    margin-top: 4px;
`;

// 댓글 입력시 아래 버튼 활성화
// const CommentBtnActive = styled.button`
//     width: 56px;
//     height: 28px;
//     background-color: #ffbb2f;
//     border: none;
//     border-radius: 15px;
// `;

const Comment = () => {
    return (
        <>
            <CommentDiv>
                <CommentImg src={profile} />
                <CommnetInp
                    type="text"
                    id="inputID"
                    placeholder="댓글 입력하기..."
                ></CommnetInp>
                <CommentBtn>등록</CommentBtn>
            </CommentDiv>
        </>
    );
};

export default Comment;
