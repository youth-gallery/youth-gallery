import React from 'react';
import styled from 'styled-components';
// import basicProfileImg from '../assets/basic-profile-img-.png';

function UserFollow({ followers, i, styles }) {
    return (
        <Li className={styles.user_follow}>
            <ProfileImg src={followers[i].image} />
            <UserInfoWarp>
                <UserName>{followers[i].accountname}</UserName>
                <UserEmail>{followers[i]._id}</UserEmail>
            </UserInfoWarp>
            {/* 버튼컴포넌트 추가 시 들어갈 자리 */}
            {followers.isfollow === false ? <div>팔로우</div> : <div>취소</div>}
        </Li>
    );
}

const Li = styled.li`
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

export default UserFollow;
