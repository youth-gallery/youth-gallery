import React from 'react';
import styled from 'styled-components';

const SaveButtonBody = styled.button`
    background-color: var(--logo-black);
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

function SaveButton() {
    return (
        <>
            <SaveButtonBody>
                <Span>저장</Span>
            </SaveButtonBody>
        </>
    );
}

export default SaveButton;
