import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonModalActive from '../modal/ButtonModalActive';
import PostAuthorInfo from './PostAuthorInfo';
import PostImg from './PostImg';
import PostHeartBtn from './PostHeartBtn';
import PostComment from './PostComment';
import PostDate from './PostDate';
import { Link } from 'react-router-dom';

const HomePostDiv = styled.div`
    display: flex;
    width: 358px;
    margin: 0 auto 25px;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    padding-right: 12px;
    border-radius: 50%;
`;

const HomePostTxt = styled.p`
    font-size: 14px;
    line-height: 1.4;
    width: 304px;
`;

const HomePost = ({ datas }) => {
    //모달 함수
    const [showModal, setShowModal] = useState(false);
    const openModal = (propState) => {
        console.log(propState);
        setShowModal(propState);
    };

    const closeModal = (props) => {
        setShowModal(props);
    };

    const reportPost = () => {
        alert('신고하였습니다.');
        setShowModal(false);
    };
    return (
        <>
            <HomePostDiv>
                <HomePostProfile src={datas.author.image} />
                <div>
                    <PostAuthorInfo
                        username={datas.author.username}
                        intro={datas.author.intro}
                        openModalProp={openModal}
                    />
                    <HomePostTxt>{datas.content}</HomePostTxt>
                    <Link to={`/post/${datas.author.username}/${datas.id}`}>
                        <PostImg image={datas.image} />
                    </Link>
                    <div>
                        <PostHeartBtn
                            datas_id={datas.id}
                            hearted={datas.hearted}
                            heartCount={datas.heartCount}
                        />
                        <PostComment
                            datas_id={datas.id}
                            username={datas.author.username}
                            commentCount={datas.commentCount}
                        />
                    </div>
                    <PostDate updatedAt={datas.updatedAt} />
                </div>
            </HomePostDiv>
            <ButtonModalActive
                propState={showModal}
                propsCloseFunc={closeModal}
                postModalValues={{
                    values: ['신고하기'],
                }}
                innerAlertValues={{
                    title: '게시물을 신고할까요? ',
                    rightText: '신고',
                    rightBtnPropFunc: reportPost,
                }}
            />
        </>
    );
};

export default HomePost;
