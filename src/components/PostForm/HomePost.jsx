import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useReport from '../../hooks/useReport';
import ButtonModalActive from '../modal/ButtonModalActive';
import PostAuthorInfo from './PostAuthorInfo';
import PostComment from './PostComment';
import PostDate from './PostDate';
import PostHeartBtn from './PostHeartBtn';
import PostImg from './PostImg';

const HomePostDiv = styled.div`
    display: flex;
    width: 358px;
    margin: 10px auto 25px;
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

const HomePost = ({ postsInfos }) => {
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
        useReport(`/post/${postsInfos?.id}/report`);
        alert('신고하였습니다.');
        setShowModal(false);
    };
    console.log(postsInfos?.author.accountname);
    return (
        <>
            <HomePostDiv>
                <Link to={`/profile/${postsInfos?.author.accountname}`}>
                    <HomePostProfile src={postsInfos?.author.image} />
                </Link>
                <div>
                    <PostAuthorInfo
                        username={postsInfos?.author.username}
                        accountname={postsInfos?.author.accountname}
                        intro={postsInfos?.author.intro}
                        openModalProp={openModal}
                    />
                    <HomePostTxt>{postsInfos?.content}</HomePostTxt>
                    <PostImg image={postsInfos?.image} />
                    <div>
                        <PostHeartBtn
                            datas_id={postsInfos?.id}
                            hearted={postsInfos?.hearted}
                            heartCount={postsInfos?.heartCount}
                        />
                        <PostComment
                            datas_id={postsInfos?.id}
                            username={postsInfos?.author.username}
                            commentCount={postsInfos?.commentCount}
                        />
                    </div>
                    <PostDate createdAt={postsInfos?.createdAt} />
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
