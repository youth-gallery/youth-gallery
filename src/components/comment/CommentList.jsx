import React, { useState, useEffect } from 'react';
import HomePostOnlyTxt from '../HomePostOnlyTxt';
import axios from 'axios';
// import profile from '../../assets/basic-profile.png';
// 프로필, name, 시간 :
// comment content

const CommentList = () => {
    // 로그인 기능 구현 전이라 임시로 토큰과 게시글 설정
    const [commentList, setCommentList] = useState([]);
    // 포스트 아이디만 바꿈. 토큰 그대로
    const postUserName = location.pathname.split('/')[2];
    const postId = location.pathname.split('/')[3];

    useEffect(() => {
        async function renderComments() {
            const url = 'https://mandarin.api.weniv.co.kr';
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU1NDNkODJmZGNjNzEyZjRjZjMyYiIsImV4cCI6MTY2MzQyMzY1NSwiaWF0IjoxNjU4MjM5NjU1fQ.Ic1go5YPFzLsfpS1UZJdfQePbGTDdubi8VEl_jmdd5A';
            localStorage.setItem('token', token);
            const getToken = localStorage.getItem('token');

            try {
                const res = await axios.get(`${url}/post/${postId}/comments`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                });
                setCommentList(res.data.comments);
                // console.log(res.data.comments);
            } catch (error) {
                console.log(error);
            }
        }
        renderComments();
    }, [commentList]); //무한 렌더링이 발생해서 commentList일단 삭제하려고했으나 패이지 리로딩방법을 못찾아 다시 넣음

    return (
        <>
            {commentList &&
                commentList.map((comment) => {
                    return (
                        <HomePostOnlyTxt
                            profileImg={comment?.author?.image}
                            name={comment?.author?.username}
                            key={comment?.id}
                            time={comment?.createdAt}
                            postUserName={postUserName}
                        >
                            <div>{comment?.content}</div>
                        </HomePostOnlyTxt>
                    );
                })}
        </>
    );
};

export default CommentList;
