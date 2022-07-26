import React from 'react';
import styled from 'styled-components';
import homeImg from '../../assets/icon-home.png';
import newsImg from '../../assets/icon-message-circle.png';
import postImg from '../../assets/icon-edit.png';
import profileImg from '../../assets/icon-user.png';
import homeImgFill from '../../assets/icon-home-fill.png';
import newsImgFill from '../../assets/icon-message-circle-fill.png';
import profileImgFill from '../../assets/icon-user-fill.png';
import { Link, Outlet } from 'react-router-dom';

const NavStyle = styled.section`
    padding: 12px 6px 6px 6px;
    border-top: 1px solid #dbdbdb;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Ul = styled.ul`
    //reset
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

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

const Li = styled.li`
    //reset
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
`;

const Span = styled.span`
    font-size: 1rem;
    color: #767676;
`;

const menuRendering = (img) => {
    const result = [];
    const imgIcon = [
        { key: 'homeImg', value: homeImg },
        { key: 'newsImg', value: newsImg },
        { key: 'postImg', value: postImg },
        { key: 'profileImg', value: profileImg },
    ];
    const imgIconFill = [homeImgFill, newsImgFill, postImg, profileImgFill];
    const tabTitle = ['홈', '소식', '게시물 작성', '프로필'];
    const link = ['/', '/news', '/post/upload', '/profile'];
    for (let i = 0; i < 4; i++) {
        result.push(
            <StyledLink to={link[i]} key={i}>
                <Li key={i}>
                    <Img
                        src={
                            imgIcon[i].key === img
                                ? imgIconFill[i]
                                : imgIcon[i].value
                        }
                        alt=""
                    />
                    <Span>{tabTitle[i]}</Span>
                </Li>
            </StyledLink>
        );
    }
    return result;
};

function TabMenu({ img }) {
    return (
        <>
            <Outlet></Outlet>
            <NavStyle className="buttom-nav">
                <Ul>{menuRendering(img)}</Ul>
            </NavStyle>
        </>
    );
}

export default TabMenu;
