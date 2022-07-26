import React from 'react';
import styled from 'styled-components';
import logoutDot from '../../assets/icon-more-vertical.png';

const SelectButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${logoutDot});
    background-size: cover;
    cursor: pointer;
`;

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

export default ButtonModal;
