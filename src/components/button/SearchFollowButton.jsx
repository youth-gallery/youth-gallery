import React from 'react';
import styled from 'styled-components';

const SearchFollowButtonBody = styled.button`
    background-color: var(--logo-yellow);
    border: initial;
    padding: 7px 11px;
    border-radius: 26px;
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
