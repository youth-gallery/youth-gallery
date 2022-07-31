import React from 'react';
import styled from 'styled-components';
import FollowButton from './button/FollowButton';
import SearchCancelButton from './button/SearchCancelButton';
// import basicProfileImg from '../assets/basic-profile-img-.png';

function UserFollow({ followers, i }) {
    // const [followState] = useState(false);
    const getAccountName = localStorage.getItem('accountname');
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
            <ButtonWarp>
                {followers[i].isfollow === false ? (
                    <FollowButton />
                ) : (
                    <SearchCancelButton />
                )}
            </ButtonWarp>
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
