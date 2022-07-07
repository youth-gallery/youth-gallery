import styled from 'styled-components';
import React from 'react';
import iconSearch from '../../assets/icon-search.png';

function TopMainNav() {
    return (
        <>
            <NavStyle className="nav">
                <span>youth-gallery 피드</span>
                <button className="btn-logout"></button>
            </NavStyle>
        </>
    );
}

export default TopMainNav;

const NavStyle = styled.section`
    //btn reset
    button {
        border: initial;
        background-color: initial;
    }
    //
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    span {
        font-size: 18px;
    }
    .btn-logout {
        width: 24px;
        height: 24px;
        background-image: url(${iconSearch});
        background-size: cover;
    }
`;
