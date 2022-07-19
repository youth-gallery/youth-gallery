import React from 'react';
import styled from 'styled-components';

const NextDisabledButtonBody = styled.button`
    background-color: var(--btn-gray);
    border: initial;
    width: 100%;
    padding: 13px 0;
    margin-top: 14px;
    border-radius: 44px;
    cursor: pointer;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 1.4rem;
`;

function NextDisalbedButton() {
    return (
        <>
            <NextDisabledButtonBody>
                <Span>다음</Span>
            </NextDisabledButtonBody>
        </>
    );
}

export default NextDisalbedButton;
