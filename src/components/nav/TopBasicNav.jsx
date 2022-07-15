import React from 'react';
import styled from 'styled-components';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import logoutDot from '../../assets/icon-more-vertical.png';

function TopBasicNav({ navTitle, styles }) {
    return (
    <>
        <NavStyle className={styles.top_nav}>
            <Warpper>
                <ArrowLeft />
                <NavTitle>{navTitle}</NavTitle>
            </Warpper>
            {navTitle !== 'Followers' ? null : <BtnLogout />}
        </NavStyle>
    </>
);
}

const NavStyle = styled.section`
    width: 100%;
    height: 48px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Warpper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
`;

const ArrowLeft = styled.button`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
    background-color: initial;
    border: none;
    flex-shrink: 0;
`;

const NavTitle = styled.h1`
    font-size: 14px;
    margin: 0;
    margin-left: 8px;
`;

const BtnLogout = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    background-image: url(${logoutDot});
    background-size: cover;
    background-color: initial;
    border: none;
`;

export default TopBasicNav;