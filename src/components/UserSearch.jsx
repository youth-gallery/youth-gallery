import React from 'react';
import styled from 'styled-components';
import basicProfileImg from '../assets/basic-profile-img-.png';

function UserSearch({ username, accountname }) {
    return (
        <Div>
            <ProfileImg src={basicProfileImg} />
            <UserInfoWarp>
                <UserName>{username}</UserName>
                <UserEmail>{accountname}</UserEmail>
            </UserInfoWarp>
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

export default UserSearch;
