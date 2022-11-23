import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonModal from '../modal/ButtonModal';

function TopBasicNav({ title, openModalProp }) {
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Wrapper>
                <ArrowLeftButton name="back" onClick={handleGoBack} />
                <NavTitle>{title}</NavTitle>
            </Wrapper>
            {location.pathname === '/myprofile' ? (
                <ButtonModal openModalProp={openModalProp} />
            ) : null}
        </>
    );
}

const Wrapper = styled.div`
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

export default TopBasicNav;