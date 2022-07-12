import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import logoutDot from '../../assets/icon-more-vertical.png';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 12px 13px;
    border-bottom: 1px solid #DBDBDB;
`;

const NavButton = styled.button`
    //reset
    border: initial;
    background-color: initial;
`;

const ArrowLeftButton = styled(NavButton)`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
`;

const LogoutButton = styled(NavButton)`
    width: 24px;
    height: 24px;
    background-image: url(${logoutDot});
    background-size: cover;
`;

function TopBasicNav() {
    return (
        <>
            <NavStyle className="nav">
                <ArrowLeftButton />
                <LogoutButton />
            </NavStyle>
        </>
    );
}

export default TopBasicNav;


