import React from 'react';
import styled from 'styled-components';

const SaveDisabledButtonBody = styled.button`
    background-color: var(--btn-gray);
    border: initial;
    padding: 7px 33px;
    border-radius: 32px;
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
