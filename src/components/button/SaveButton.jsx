import React from 'react';
import styled from 'styled-components';

const SaveButtonBody = styled.button`
    background-color: var(--logo-black);
    border: initial;
    padding: 7px 33px;
    border-radius: 32px;
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
