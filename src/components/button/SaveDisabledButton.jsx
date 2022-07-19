import React from 'react';
import styled from 'styled-components';

const SaveDisabledButtonBody = styled.button`
    background-color: var(--btn-gray);
    border: initial;
    width: 100%;
    padding: 7px 0;
    border-radius: 32px;
    cursor: pointer;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 1.4rem;
`;

function SaveDisabledButton() {
    return (
        <>
            <SaveDisabledButtonBody>
                <Span>저장</Span>
            </SaveDisabledButtonBody>
        </>
    );
}

export default SaveDisabledButton;
