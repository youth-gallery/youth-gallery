import React from 'react';
import styled from 'styled-components';

const FollowDisabledButtonBody = styled.button`
    background-color: var(--btn-gray);
    border: initial;
    padding: 8px 41px;
    border-radius: 30px;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 1.4rem;
`;

function FollowDisabledButton() {
    return (
        <>
            <FollowDisabledButtonBody>
                <Span>팔로우</Span>
            </FollowDisabledButtonBody>
        </>
    );
}

export default FollowDisabledButton;
