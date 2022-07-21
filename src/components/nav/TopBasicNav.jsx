import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import logoutDot from '../../assets/icon-more-vertical.png';
import { useNavigate } from 'react-router-dom';

const Warpper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8px;
`;

const NavTitle = styled.h1`
    font-size: 1.4rem;
    margin: 0;
    margin-left: 8px;
`;

const ArrowLeftButton = styled.button`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
    background-color: initial;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
`;

const LogoutButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${logoutDot});
    background-size: cover;
    cursor: pointer;
`;

function TopBasicNav({ title, openModalProp }) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const openModal = () => {
        openModalProp(true);
    };
    return (
        <>
            <Warpper>
                <ArrowLeftButton name="back" onClick={handleGoBack} />
                <NavTitle>{title}</NavTitle>
            </Warpper>
            {title === 'Followers' ? null : (
                <LogoutButton onClick={openModal} />
            )}
        </>
    );
}

export default TopBasicNav;
