import React, { useState } from 'react';
import styled from 'styled-components';
import heartIcon from '../assets/icon-heart.png';
import messageIcon from '../assets/icon-message-circle-1.png';
import ButtonModal from './modal/ButtonModal';
import ButtonModalActive from './modal/ButtonModalActive';

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
`;

const HomePostImg = styled.img`
    width: 304px;
    height: 228px;
    object-fit: cover;
    border-radius: 10px;
`;

const HeartBtn = styled.button`
    width: 45px;
    height: 20px;
    background: url(${heartIcon}) no-repeat left / 18px 18px;
    text-align: right;
    border: none;
    cursor: pointer;
    color: #767676;
`;

const CommentBtn = styled.button`
    width: 45px;
    height: 20px;
    margin: 7px 206px 15px 8px;
    background: url(${messageIcon}) no-repeat left / 18px 18px;
    text-align: right;
    border: none;
    cursor: pointer;
    color: #767676;
`;
const HomePostDate = styled.span`
    display: block;
    margin-bottom: 4px;
    color: #767676;
    font-size: 1rem;
    line-height: 1.2;
`;

const UserPost = ({ postList, profileData, i }) => {
    const postDate = new Date(postList[i].updatedAt);
    const [showModal, setShowModal] = useState(false);
    const openModal = (propState) => {
        console.log(propState);
        setShowModal(propState);
    };

    const closeModal = (props) => {
        setShowModal(props);
    };

    const deletePost = () => {
        alert('삭제하였습니다.');
        setShowModal(false);
    };

    return (
        <>
            <HomePostLi>
                <div>
                    <HomePostProfile src={profileData.image} />
                </div>
                <div>
                    <FlexDiv>
                        {/* 클릭시 해당 사용자 피드 목록으로 이동하도록 후에 처리 */}
                        <UserWarp>
                            <HomePostName>{profileData.username}</HomePostName>
                            <HomePostId>{`@${profileData.accountname}`}</HomePostId>
                        </UserWarp>
                        <ButtonModal openModalProp={openModal} />
                    </FlexDiv>
                    <HomePostTxt>{postList[i].content}</HomePostTxt>
                    <HomePostImg src={postList[i].image} alt="포스트 이미지" />
                    <HeartBtn>{postList[i].heartCount}</HeartBtn>
                    <CommentBtn>{postList[i].commentCount}</CommentBtn>
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
