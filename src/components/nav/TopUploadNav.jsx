import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';

function TopUploadNav() {
    return (
        <>
            <NavStyle className="nav">
                <button className="arrow-left"></button>
                {/* 나중에 저장버튼 component 넣을 공간 */}
                <button>저장</button>
            </NavStyle>
        </>
    );
}

export default TopUploadNav;

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
`;
