import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import { useNavigate } from 'react-router-dom';
import SaveButton from '../button/SaveButton';

const ArrowLeftButton = styled.button`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
    cursor: pointer;
`;

const ButtonDiv = styled.div`
    width: 90px;
`;

function TopUploadNav({ title }) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <ArrowLeftButton name="back" onClick={handleGoBack} />
            <ButtonDiv>
                <SaveButton title={title} />
            </ButtonDiv>
        </>
    );
}

export default TopUploadNav;
