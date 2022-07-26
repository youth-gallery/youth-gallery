import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import basicProfileImg from '../assets/basic-profile-img-.png';

function UserSearch({ userImg, username, accountname, keyword }) {
    const ColoredItem = ({ item, query }) => {
        return item.includes(query) ? (
            <>
                {item.split(query)[0]}
                <Span backgroundColor={`var(--logo-yellow)`}>{keyword}</Span>
                {item.split(query)[1]}
            </>
        ) : (
            <>{item}</>
        );
    };
    return (
        // 추후에 아이디 프로필 페이지로 연결
        <StyledLink to={'/profile/' + accountname}>
            <Div>
                <ProfileImg src={userImg || basicProfileImg} />
                <UserInfoWarp>
                    <UserName>
                        <ColoredItem
                            item={username}
                            query={keyword}
                            type={'username'}
                        />
                    </UserName>
                    <UserEmail>
                        @
                        <ColoredItem
                            item={accountname}
                            query={keyword}
                            type={'accountname'}
                        />
                    </UserEmail>
                </UserInfoWarp>
            </Div>
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

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
    /* background-color: ${(props) => props.backgroundColor || `none`}; */
    margin: 0;
`;

const UserEmail = styled.p`
    font-size: 12px;
    line-height: 15.02px;
    color: #767676;
    /* background-color: ${(props) => props.backgroundColor || `none`}; */
    margin: 0;
`;

const Span = styled.span`
    background-color: ${(props) => props.backgroundColor || `none`};
`;

export default UserSearch;
