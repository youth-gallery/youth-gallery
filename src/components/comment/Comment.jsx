import React, { useState } from 'react';
import profile from '../../assets/basic-profile.png';
import styled from 'styled-components';

const Div = styled.div`
    position: relative;
`;

const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px 12px 16px;
    border: 1px solid black;
    width: 98%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const CommnetInp = styled.input`
    width: 90%;
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
    padding: 4px 15px;
    // 나중에 var() color로 교체하기
    background-color: #c4c4c4;
    border: none;
    border-radius: 15px;
    margin-top: 4px;
    word-break: keep-all;
    cursor: pointer;
`;

// 댓글 입력시 아래 버튼 활성화
const CommentBtnActive = styled.button`
    padding: 4px 15px;
    // 나중에 var() color로 교체하기
    background-color: #ffbb2f;
    border: none;
    border-radius: 15px;
    margin-top: 4px;
    word-break: keep-all;
    cursor: pointer;
`;

const Comment = () => {
    const [inp, setInp] = useState('');
    const handleInp = (event) => {
        console.log(inp);
        setInp(event.target.value);
    };

    return (
        <Div>
            <CommentForm>
                <CommentImg src={profile} />
                <CommnetInp
                    type="text"
                    id="inputID"
                    placeholder="댓글 입력하기..."
                    onChange={handleInp}
                />
                {inp.length > 0 ? (
                    <CommentBtnActive>등록</CommentBtnActive>
                ) : (
                    <CommentBtn>등록</CommentBtn>
                )}
            </CommentForm>
        </Div>
    );
};

export default Comment;
