import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 12px 13px;
    border-bottom: 1px solid #dbdbdb;
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

function TopUploadNav() {
    return (
        <>
            <NavStyle className="nav">
                <ArrowLeftButton />
                {/* 나중에 저장버튼 component 넣을 공간 */}
                <NavButton>저장</NavButton>
            </NavStyle>
        </>
    );
}

export default TopUploadNav;
