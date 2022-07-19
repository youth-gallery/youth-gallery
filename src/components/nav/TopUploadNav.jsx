import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import { useNavigate } from 'react-router-dom';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid #dbdbdb;
`;

const NavButton = styled.button`
    //reset
    border: initial;
    background-color: initial;
    cursor: pointer;
`;

const ArrowLeftButton = styled(NavButton)`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
`;

function TopUploadNav(props) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <NavStyle className="nav">
                <ArrowLeftButton name="back" onClick={handleGoBack} />
                {/* 나중에 저장버튼 component 넣을 공간 */}
                <NavButton>{props.value}</NavButton>
            </NavStyle>
        </>
    );
}

export default TopUploadNav;
