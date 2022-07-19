import React from 'react';
import styled from 'styled-components';

const SearchCancelButtonBody = styled.button`
    background-color: #ffffff;
    padding: 7px 11px;
    border-radius: 26px;
    border: 1px solid #dbdbdb;
`;

const Span = styled.span`
    color: var(--gray-color);
    font-size: 1.2rem;
`;

function SearchCancelButton() {
    return (
        <>
            <SearchCancelButtonBody>
                <Span>취소</Span>
            </SearchCancelButtonBody>
        </>
    );
}

export default SearchCancelButton;
