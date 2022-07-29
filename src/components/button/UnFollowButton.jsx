import React from 'react';
import styled from 'styled-components';

const UnFollowButtonBody = styled.button`
    background-color: #ffffff;
    width: 100%;
    padding: 8px 0;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
    cursor: pointer;
`;

const Span = styled.span`
    color: var(--gray-color);
    font-size: 1.4rem;
`;

function UnFollowButton() {
    return (
        <>
            <UnFollowButtonBody>
                <Span>언팔로우</Span>
            </UnFollowButtonBody>
        </>
    );
}

export default UnFollowButton;
