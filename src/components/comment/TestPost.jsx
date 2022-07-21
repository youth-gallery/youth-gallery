import React, { useState } from 'react';
import axios from 'axios';
import CommentBox from './CommentBox';

const TestPost = () => {
    const [content, setContent] = useState('');
    // const postId = '62d5543d82fdcc712f4cf32b';

    // 현재 로그인 기능이 없어 임시로 사용자와 토큰을 설정했습니다
    // 나중에 지우면 되는 테스트 페이지
    const renderPost = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU1NDNkODJmZGNjNzEyZjRjZjMyYiIsImV4cCI6MTY2MzM5MzAxMSwiaWF0IjoxNjU4MjA5MDExfQ.QA5ERldGsJAbMg0uqfz1HrIWH_ziwq2g7uD3mGZ2atg';
        const accountName = 'abc2id';
        localStorage.setItem('token', token);
        const getToken = localStorage.getItem('token');

        try {
            const res = await axios.get(`${url}/post/${accountName}/userpost`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            setContent(res.data.post[0].content);
        } catch (error) {
            console.log(error);
        }
    };
    renderPost();
    return (
        <>
            {/* 이 자리에 게시물 상세가 불러와집니다 */}
            <h1
                style={{
                    display: 'block',
                    width: '400px',
                    margin: '10px auto',
                }}
            >
                게시물 내용 : {content}
            </h1>
            <CommentBox />
        </>
    );
};

export default TestPost;
