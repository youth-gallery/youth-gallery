import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyle = styled.section`
    padding: 12px 6px 6px 6px;
    border-top: 1px solid #dbdbdb;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 450px;
    box-sizing: border-box;
`;

export const Ul = styled.ul`
    //reset
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

export const Li = styled.li`
    //reset
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
`;

export const Span = styled.span`
    font-size: 1rem;
    color: #767676;
`;
