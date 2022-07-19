import React from 'react';
import styled from 'styled-components';

const FollowButtonBody = styled.button`
    background-color: var(--logo-yellow);
    border: initial;
    padding: 8px 41px;
    border-radius: 30px;
`;

const Span = styled.span`
    color: var(--logo-black);
    font-size: 1.4rem;
`;

function FollowButton() {
    return (
        <>
            <FollowButtonBody>
                <Span>팔로우</Span>
            </FollowButtonBody>
        </>
    );
}

export default FollowButton;
