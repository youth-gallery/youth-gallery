import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import { useNavigate } from 'react-router-dom';
import SaveButton from '../button/SaveButton';
import SaveDisabledButton from '../button/SaveDisabledButton';

function TopUploadNav({ title, state }) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/home');
    };

    return (
        <>
            <ArrowLeftButton name="back" onClick={handleGoBack} />
            <ButtonDiv>
                {state ? (
                    <SaveButton title={title} />
                ) : (
                    <SaveDisabledButton title={title} />
                )}
            </ButtonDiv>
        </>
    );
}

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

export default TopUploadNav;