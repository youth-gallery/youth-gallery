import styled from 'styled-components';
import React from 'react';
import iconSearch from '../../assets/icon-search.png';
import { Link } from 'react-router-dom';

function TopMainNav({ title }) {
    return (
        <>
            <Span>{title}</Span>
            <Link to={'/search'}>
                <SearchButton />
            </Link>
        </>
    );
}

const Span = styled.span`
    font-size: 1.8rem;
`;

const SearchButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${iconSearch});
    background-size: cover;
    cursor: pointer;
`;

export default TopMainNav;