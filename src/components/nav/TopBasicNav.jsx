import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import logoutDot from '../../assets/icon-more-vertical.png';

function TopBasicNav() {
    return (
        <>
            <NavStyle className="nav">
                <button className="arrow-left"></button>
                <button className="btn-logout"></button>
            </NavStyle>
        </>
    );
}

export default TopBasicNav;

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
    padding: 12px 12px 12px 13px;
    .arrow-left {
        width: 22px;
        height: 22px;
        background-image: url(${iconArrowLeft});
        background-size: cover;
    }
    .btn-logout {
        width: 24px;
        height: 24px;
        background-image: url(${logoutDot});
        background-size: cover;
    }
`;
