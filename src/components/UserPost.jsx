import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonModal from './modal/ButtonModal';
import ButtonModalActive from './modal/ButtonModalActive';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PostHeartBtn from './PostForm/PostHeartBtn';
import PostComment from './PostForm/PostComment';
import PostImg from './PostForm/PostImg';

const HomePostLi = styled.li`
    display: flex;
    max-width: 358px;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    padding-right: 12px;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UserWarp = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomePostName = styled.span`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.2;
    padding: 4px 80px 0 0;
`;

const HomePostId = styled.span`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2;
    color: #767676;
    padding: 0 180px 16px 0;
`;

const HomePostTxt = styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
    width: 304px;
`;

const HomePostDate = styled.span`
    display: block;
    margin-bottom: 4px;
    color: #767676;
    font-size: 1rem;
    line-height: 1.2;
`;

const UserPost = ({ postList, profileData, i }) => {
    const navigate = useNavigate();
    console.log(postList);

    const postDate = new Date(postList[i].updatedAt);
    const [showModal, setShowModal] = useState(false);
    const openModal = (propState) => {
        console.log(propState);
        setShowModal(propState);
    };

    const closeModal = (props) => {
        setShowModal(props);
    };

    const deletePost = async () => {
        const postId = postList[i].id;
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');

        try {
            await axios.delete(`${url}/post/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            alert('삭제하였습니다.');
            setShowModal(false);
            navigate('/myprofile');
        } catch (error) {
            <Link to="/notFound" />;
            console.log(error);
        }
        console.log(postId);
    };

    return (
        <>
            <HomePostLi>
                <div>
                    <HomePostProfile src={profileData.image} />
                </div>
                <div>
                    <FlexDiv>
                        <UserWarp>
                            <HomePostName>{profileData.username}</HomePostName>
                            <HomePostId>{`@${profileData.accountname}`}</HomePostId>
                        </UserWarp>
                        <ButtonModal openModalProp={openModal} />
                    </FlexDiv>
                    <HomePostTxt>{postList[i].content}</HomePostTxt>
                    <Link
                        to={`/post/${profileData.username}/${postList[i].id}`}
                    >
                        <PostImg image={postList[i].image} />
                    </Link>
                    <PostHeartBtn
                        datas_id={postList[i].id}
                        hearted={postList[i].hearted}
                        heartCount={postList[i].heartCount}
                    />
                    <PostComment
                        datas_id={postList[i].id}
                        username={postList[i].autho}
                        commentCount={postList[i].commentCount}
                    />
                    <HomePostDate>
                        {`${postDate.getFullYear()}년 ${
                            postDate.getMonth() + 1
                        }월 ${postDate.getDate()}일`}
                    </HomePostDate>
                </div>
            </HomePostLi>
            <ButtonModalActive
                propState={showModal}
                propsCloseFunc={closeModal}
                postModalValues={{
                    values: ['삭제', '수정'],
                }}
                innerAlertValues={{
                    title: '게시물을 삭제할까요? ',
                    rightText: '삭제',
                    rightBtnPropFunc: deletePost,
                }}
            />
        </>
    );
};

export default UserPost;
