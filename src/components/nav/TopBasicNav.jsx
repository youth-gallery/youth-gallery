import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import logoutDot from '../../assets/icon-more-vertical.png';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 12px 12px 12px 13px;
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

const Warpper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
`;

const NavButton = styled.button`
    //reset
    border: initial;
    background-color: initial;
`;

const NavTitle = styled.h1`
    font-size: 14px;
    margin: 0;
    margin-left: 8px;
`;

const ArrowLeftButton = styled(NavButton)`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
    background-color: initial;
    border: none;
    flex-shrink: 0;
`;

const LogoutButton = styled(NavButton)`
    width: 24px;
    height: 24px;
    background-image: url(${logoutDot});
    background-size: cover;
`;

function TopBasicNav({ navTitle }) {
    return (
        <>
            <NavStyle className="nav">
                <Warpper>
                    <ArrowLeftButton />
                    <NavTitle>{navTitle}</NavTitle>
                </Warpper>
                {navTitle !== 'Followers' ? null : <LogoutButton />}
            </NavStyle>
        </>
    );
}

export default TopBasicNav;
