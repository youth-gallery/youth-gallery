import React, { useState, useEffect } from 'react';
import HomePostOnlyTxt from '../PostForm/HomePostOnlyTxt';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import useComments from '../../hooks/useComments';
import styles from './Comments.module.css';

const Comments = ({ postUserName, buttonHandleProp, setCommentPush }) => {
    const [commentList, renderComments] = useComments();
    const { post_id } = useParams();
    console.log(post_id);

    const [inp, setInp] = useState('');
    const [profileImg, setProfileImg] = useState();

    useEffect(() => {
        renderComments(post_id);
    }, []);

    console.log(commentList);

    const deleteComment = async (commentId) => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        console.log(`${url}/post/${post_id}/comments/${commentId}/`);
        setCommentPush(true);

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
            renderComments(post_id);
            console.log(commentId);
        } catch (error) {
            <Link to="/notFound" />;
            console.log(error);
        }
    };

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
        setCommentPush(true);
        e.preventDefault();
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');

        try {
            await axios.post(
                `${url}/post/${post_id}/comments`,
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

            renderComments(post_id);
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
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
                            time={comment?.createdAt}
                            postUserName={postUserName}
                            commentId={comment.id}
                            deleteComment={deleteComment}
                        >
                            <div>{comment?.content}</div>
                        </HomePostOnlyTxt>
                    );
                })}

            <div className={styles.comment_div} onSubmit={createComment}>
                <form className={styles.comment_form}>
                    <img src={profileImg} className={styles.comment_img} />
                    <input
                        className={styles.comment_inp}
                        type="text"
                        id="inputID"
                        placeholder="댓글 입력하기..."
                        onChange={handleInp}
                    />
                    {inp.length > 0 ? (
                        <button className={styles.comment_active_btn}>
                            등록
                        </button>
                    ) : (
                        <button
                            className={styles.comment_btn}
                            onClick={() => {
                                buttonHandleProp(true);
                            }}
                        >
                            등록
                        </button>
                    )}
                </form>
            </div>
        </>
    );
};

export default Comments;
