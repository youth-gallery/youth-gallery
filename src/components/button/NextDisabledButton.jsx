import React from 'react';
import styled from 'styled-components';

const NextDisabledButtonBody = styled.button`
    background-color: var(--btn-gray);
    border: initial;
    padding: 13px 148px;
    border-radius: 44px;
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
