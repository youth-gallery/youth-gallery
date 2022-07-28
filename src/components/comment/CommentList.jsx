import React, { useState, useEffect } from 'react';
import HomePostOnlyTxt from '../PostForm/HomePostOnlyTxt';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// import profile from '../../assets/basic-profile.png';
// 프로필, name, 시간 :
// comment content

const CommentList = ({ postId, postUserName, setShowModal }) => {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        async function renderComments() {
            const url = 'https://mandarin.api.weniv.co.kr';
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
            } catch (error) {
                console.log(error);
            }
        }
        renderComments();
    }, [commentList]); //무한 렌더링이 발생해서 commentList일단 삭제하려고했으나 패이지 리로딩방법을 못찾아 다시 넣음

    const deleteComment = async (commentId) => {
        const { post_id } = useParams();
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');

        try {
            await axios.delete(
                `${url}/post/${post_id}/comments/${commentId}/`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            alert('삭제하였습니다.');
            setShowModal(false);
            setCommentList(commentList.filter((key) => key !== commentId));
        } catch (error) {
            <Link to="/notFound" />;
            console.log(error);
        }
    };

    console.log(commentList);
    return (
        <>
            {commentList &&
                commentList.map((comment) => {
                    return (
                        <HomePostOnlyTxt
                            profileImg={comment?.author?.image}
                            name={comment?.author?.username}
                            accountname={comment?.author?.accountname}
                            key={comment?.id}
                            comment_id={comment?.id}
                            time={comment?.createdAt}
                            postUserName={postUserName}
                            deleteComment={deleteComment}
                            commentId={comment.id}
                        >
                            <div>{comment?.content}</div>
                        </HomePostOnlyTxt>
                    );
                })}
        </>
    );
};

export default CommentList;
