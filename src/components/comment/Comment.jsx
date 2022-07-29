import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
    position: relative;
`;

const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px 12px 16px;
    border-top: 1px solid #dbdbdb;
    width: 98%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 450px;
    margin: 0 auto;
    box-sizing: border-box;
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
    border-radius: 50%;
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

const Comment = ({ postId, buttonHandleProp }) => {
    const [inp, setInp] = useState('');
    const [profileImg, setProfileImg] = useState();

    const handleInp = (event) => {
        setInp(event.target.value);
    };

    const renderProfile = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        const getAccountname = localStorage.getItem('accountname');

        try {
            const res = await axios.get(`${url}/profile/${getAccountname}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            const userProfile = await res.data.profile.image;
            setProfileImg(userProfile);
        } catch (error) {
            console.log(error);
        }
    };
    renderProfile();

    const createComment = async (e) => {
        e.preventDefault();
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');

        try {
            await axios.post(
                `${url}/post/${postId}/comments`,
                {
                    comment: {
                        content: `${inp}`,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    };

    return (
        <Div>
            <CommentForm onSubmit={createComment}>
                <CommentImg src={profileImg} />
                <CommnetInp
                    type="text"
                    id="inputID"
                    placeholder="댓글 입력하기..."
                    onChange={handleInp}
                />
                {inp.length > 0 ? (
                    <CommentBtnActive>등록</CommentBtnActive>
                ) : (
                    <CommentBtn
                        onClick={() => {
                            buttonHandleProp(true);
                        }}
                    >
                        등록
                    </CommentBtn>
                )}
            </CommentForm>
        </Div>
    );
};

export default Comment;
