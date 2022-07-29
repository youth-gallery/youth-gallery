import React, { useEffect } from 'react';
import HomePostOnlyTxt from '../PostForm/HomePostOnlyTxt';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import useComments from '../../hooks/useComments';
// import profile from '../../assets/basic-profile.png';
// 프로필, name, 시간 :
// comment content

const CommentList = ({ postId, postUserName }) => {
    const [commentList, renderComments] = useComments();
    const { post_id } = useParams();
    console.log(post_id);

    useEffect(() => {
        renderComments(post_id);
    }, []);
    console.log(commentList);

    const deleteComment = async (commentId) => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        console.log(`${url}/post/${post_id}/comments/${commentId}/`);

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
            renderComments(postId);
            console.log(commentId);
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
                            time={comment?.createdAt}
                            postUserName={postUserName}
                            commentId={comment.id}
                            deleteComment={deleteComment}
                        >
                            <div>{comment?.content}</div>
                        </HomePostOnlyTxt>
                    );
                })}
        </>
    );
};

export default CommentList;
