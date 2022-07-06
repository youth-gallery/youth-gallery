import React from 'react';
import styled from 'styled-components';
import basicProfileImg from '../assets/basic-profile-img-.png';

function UserSearch() {
    return (
        <Div>
            <ProfileImg src={basicProfileImg} />
            <UserInfoWarp>
                <UserName>유저 이름</UserName>
                <UserEmail>유저 이메일</UserEmail>
            </UserInfoWarp>
            <FollowButton>팔로우</FollowButton>
            {/* 나중에 아래 코드로 바꿔서 짜고 싶습니다. */}
            {/* {팔로우상태 === false ? <FollowButton /> : null} */}
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
    text-align: start;
    width: 100%;
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
    font-size: 12px;
    color: #212121;
    background-color: #ffbb2f;
    border-radius: 26px;
    border: none;
    word-break: keep-all;
    padding: 7px 11px;
`;

export default UserSearch;
