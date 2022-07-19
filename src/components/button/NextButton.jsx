import React from 'react';
import styled from 'styled-components';

const NextButtonBody = styled.button`
    background-color: var(--logo-black);
    border: initial;
    padding: 13px 148px;
    border-radius: 44px;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 1.4rem;
`;

function NextButton() {
    return (
        <>
            <NextButtonBody>
                <Span>다음</Span>
            </NextButtonBody>
        </>
    );
}

export default NextButton;
