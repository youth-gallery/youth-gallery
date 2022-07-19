import React from 'react';
import styled from 'styled-components';

const SearchFollowButtonBody = styled.button`
    background-color: var(--logo-yellow);
    border: initial;
    width: 100%;
    padding: 7px 0;
    border-radius: 26px;
    cursor: pointer;
`;

const Span = styled.span`
    color: var(--logo-black);
    font-size: 1.2rem;
`;

function SearchFollowButton() {
    return (
        <>
            <SearchFollowButtonBody>
                <Span>팔로우</Span>
            </SearchFollowButtonBody>
        </>
    );
}

export default SearchFollowButton;
