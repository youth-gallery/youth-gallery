import React from 'react';
import styled from 'styled-components';
import basicProfileImg from '../assets/basic-profile-img-.png';
import { useState } from 'react';

function UserFollow() {
    const [followState] = useState(false);
    return (
        <Div>
            <ProfileImg src={basicProfileImg} />
            <UserInfoWarp>
                <UserName>유저 이름</UserName>
                <UserEmail>유저 이메일</UserEmail>
            </UserInfoWarp>
            {followState === false ? (
                <FollowButton color="#212121">팔로우</FollowButton>
            ) : (
                <FollowButton color="#767676">취소</FollowButton>
            )}
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
`;

const UserInfoWarp = styled.div`
    width: 100%;
    text-align: start;
`;

const UserName = styled.p`
    font-size: 14px;
    line-height: 17.53px;
    color: #000;
    margin: 0;
`;

const UserEmail = styled.span`
    font-size: 12px;
    line-height: 15.02px;
    color: #767676;
    margin: 0;
`;

const FollowButton = styled.button`
    width: 56px;
    height: 28px;
    box-sizing: border-box;
    font-size: 12px;
    color: ${(props) => props.color};
    background-color: ${(props) =>
        props.color === '#212121' ? '#ffbb2f' : '#fff'};
    border-radius: 26px;
    border: ${(props) =>
        props.color === '#212121' ? 'none' : '1px solid #dbdbdb'};
    word-break: keep-all;
    flex-shrink: 0;
`;

export default UserFollow;
