import styled from 'styled-components';
import React from 'react';
import iconSearch from '../../assets/icon-search.png';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #dbdbdb;
`;

const NavButton = styled.button`
    //reset
    border: initial;
    background-color: initial;
`;

const Span = styled.span`
    font-size: 1.8rem;
`;

const LogoutButton = styled(NavButton)`
    width: 24px;
    height: 24px;
    background-image: url(${iconSearch});
    background-size: cover;
`;

function TopMainNav() {
    return (
        <>
            <NavStyle className="nav">
                <Span>youth-gallery 피드</Span>
                <LogoutButton></LogoutButton>
            </NavStyle>
        </>
    );
}

export default TopMainNav;
