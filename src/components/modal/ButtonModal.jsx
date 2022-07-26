import React, { useRef } from 'react';
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
    let commentTarget = useRef('');
    const openModal = () => {
        openModalProp(true, commentTarget);
    };
    return (
        <>
            <SelectButton onClick={openModal} ref={commentTarget} />
        </>
    );
}

export default ButtonModal;
