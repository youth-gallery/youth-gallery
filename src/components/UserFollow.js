import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowButton from './button/FollowButton';
import SearchCancelButton from './button/SearchCancelButton';
// import basicProfileImg from '../assets/basic-profile-img-.png';

function UserFollow({ followers, i }) {
    const [followState, setFollowState] = useState(followers[i].isfollow);
    const getToken = localStorage.getItem('token');
    const getAccountName = localStorage.getItem('accountname');
    const accountName = followers[i].accountname;

    useEffect(() => {
        setFollowState(followers[i].isfollow);
    }, [followers]);
    const handleButton = () => {
        if (followState) {
            axios
                .delete(
                    `https://mandarin.api.weniv.co.kr/profile/${accountName}/unfollow`,
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    setFollowState(res.data.profile.isfollow);
                    console.log(followState);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .post(
                    `https://mandarin.api.weniv.co.kr/profile/${accountName}/follow`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    setFollowState(res.data.profile.isfollow);
                    console.log(followState);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <Li
            to={
                getAccountName === followers[i].accountname
                    ? '/myprofile'
                    : '/profile/' + followers[i].accountname
            }
        >
            <ProfileImg src={followers[i].image} />
            <UserInfoWarp>
                <UserName>{followers[i].accountname}</UserName>
                <UserEmail>{followers[i].intro}</UserEmail>
            </UserInfoWarp>
            {accountName === getAccountName ? null : (
                <ButtonWarp onClick={handleButton}>
                    {followState === false ? (
                        <FollowButton />
                    ) : (
                        <SearchCancelButton />
                    )}
                </ButtonWarp>
            )}
        </Li>
    );
}

const Li = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    margin-bottom: 16px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
`;

const UserInfoWarp = styled.div`
    text-align: start;
    flex-grow: 1;
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

const ButtonWarp = styled.div`
    width: 56px;
`;

export default UserFollow;
