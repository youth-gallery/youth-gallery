import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonModal from './modal/ButtonModal';
import ButtonModalActive from './modal/ButtonModalActive';
// import heartIcon from '../assets/icon-heart.png';
// import messageIcon from '../assets/icon-message-circle-1.png';

const HomePostDiv = styled.div`
    display: flex;
    // 중앙정렬 위해 너비 길이 지정, 나중에 rem으로 고치기
    width: 390px;
    margin: 0 auto 25px auto;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    padding-right: 12px;
    border-radius: 50%;
`;

const Div = styled.div`
    width: 100%;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
`;

const HomePostName = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
`;

const HomePostSpan = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    color: #767676;
    margin-left: 5px;
`;

// const MoreIcon = styled.button`
//     width: 20px;
//     height: 20px;
//     margin-top: 4px;
//     background: url(${moreIcon}) no-repeat center / 18px 18px;
//     border: none;
//     cursor: pointer;
// `;

// const HomePostTxt = styled.p`
//     font-size: 14px;
//     line-height: 1.4;
// `;

// const HeartBtn = styled.button`
//     width: 45px;
//     height: 20px;
//     background: url(${heartIcon}) no-repeat left / 18px 18px;
//     text-align: right;
//     border: none;
//     cursor: pointer;
//     color: #767676;
// `;

// const CommentBtn = styled.button`
//     width: 45px;
//     height: 20px;
//     margin: 3px 206px 15px 8px;
//     background: url(${messageIcon}) no-repeat left / 18px 18px;
//     text-align: right;
//     border: none;
//     cursor: pointer;
//     color: #767676;
// `;

// const HomePostDate = styled.span`
//     display: block;
//     margin-bottom: 4px;
//     color: #767676;
//     font-size: 10px;
//     line-height: 1.2;
// `;

const HomePostOnlyTxt = ({
    profileImg,
    name,
    accountname,
    time,
    children,
    postUserName,
}) => {
    // 작성 시간 계산 함수. 나중에 util로 빼기
    const getTimeGap = (createTime) => {
        const today = new Date();
        const timeValue = new Date(createTime);

        const betweenTime = Math.floor(
            (today.getTime() - timeValue.getTime()) / 1000 / 60
        );
        if (betweenTime < 1) return '방금 전';
        if (betweenTime < 60) {
            return `${betweenTime}분 전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간 전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일 전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년 전`;
    };

    //모달 함수
    const [showModal, setShowModal] = useState(false);
    const openModal = (propState, commentTarget) => {
        console.log(propState);
        setShowModal(propState);
        setCommentValue(commentTarget);
    };

    const closeModal = (props) => {
        setShowModal(props);
    };

    const reportPost = () => {
        alert('신고하였습니다.');
        setShowModal(false);
    };

    const deletePost = () => {
        alert('삭제하였습니다.');
        setShowModal(false);
    };

    console.log(name);
    console.log(postUserName);
    const [commentValue, setCommentValue] = useState('');
    console.log(commentValue);

  const myAccountName = ''; //추후에 로그인 동작시 accountname 불러와서 저장
  
    return (
        <>
            <HomePostDiv>
                <div>
                    <HomePostProfile src={profileImg} />
                </div>
                <Div>
                    <FlexDiv>
                        {/* 클릭시 해당 사용자 피드 목록으로 이동하도록 후에 처리 */}
                        <Div>
                            <HomePostName>{name}</HomePostName>
                            <HomePostSpan> · {getTimeGap(time)}</HomePostSpan>
                        </Div>
                        <ButtonModal openModalProp={openModal} />
                    </FlexDiv>
                    {children}
                </Div>
            </HomePostDiv>
            {accountname === myAccountName ? (
                <ButtonModalActive
                    propState={showModal}
                    propsCloseFunc={closeModal}
                    postModalValues={{
                        values: ['삭제'],
                    }}
                    innerAlertValues={{
                        title: '댓글을 삭제할까요? ',
                        rightText: '삭제',
                        rightBtnPropFunc: deletePost,
                    }}
                />
            ) : (
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
            )}
        </>
    );
};

export default HomePostOnlyTxt;
