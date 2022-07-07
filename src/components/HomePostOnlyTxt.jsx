import React from 'react';
import styled from 'styled-components';
import profile from '../assets/basic-profile.png';
import moreIcon from '../assets/s-icon-more-vertical.png';
import heartIcon from '../assets/icon-heart.png';
import messageIcon from '../assets/icon-message-circle-1.png';

const HomePostDiv = styled.div`
    display: flex;
    width: 358px;

    /* 영역 구분 위해 임시로 넣음. 후에 빼기 */
    border: 1px solid #767676;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    padding-right: 12px;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HomePostName = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    padding: 4px 80px 0 0;
`;

const HomePostId = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    color: #767676;
    padding: 0 180px 16px 0;
`;

const MoreIcon = styled.button`
    width: 20px;
    height: 20px;
    margin-top: 4px;
    background: url(${moreIcon}) no-repeat center / 18px 18px;
    border: none;
    cursor: pointer;
`;

const HomePostTxt = styled.p`
    font-size: 14px;
    line-height: 1.4;
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
    margin: 3px 206px 15px 8px;
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
    font-size: 10px;
    line-height: 1.2;
`;

const HomePostOnlyTxt = () => {
    return (
        <>
            <HomePostDiv>
                <div>
                    <HomePostProfile src={profile} />
                </div>
                <div>
                    <FlexDiv>
                        {/* 클릭시 해당 사용자 피드 목록으로 이동하도록 후에 처리 */}
                        <div>
                            <HomePostName>애월읍 위니브 감귤농장</HomePostName>
                            <HomePostId>@weniv_Mandarin</HomePostId>
                        </div>
                        <MoreIcon />
                    </FlexDiv>
                    <HomePostTxt>
                        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의
                        위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
                        약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                    </HomePostTxt>
                    <HeartBtn>58</HeartBtn>
                    <CommentBtn>12</CommentBtn>
                    <HomePostDate>2020년 10월 21일</HomePostDate>
                </div>
            </HomePostDiv>
        </>
    );
};

export default HomePostOnlyTxt;
