import React from 'react';
import styled from 'styled-components';
import logoutDot from '../../assets/icon-more-vertical.png';

function ButtonModal({ openModalProp }) {
    const openModal = () => {
        openModalProp(true);
    };
    return (
        <>
            <SelectButton onClick={openModal}/>
        </>
    );
}

const SelectButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${logoutDot});
    background-size: cover;
    cursor: pointer;
`;

export default ButtonModal;