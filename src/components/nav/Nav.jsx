import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 12px 12px 12px 13px;
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

function Nav(props) {
    return <NavStyle>{props.children}</NavStyle>;
}

export default Nav;
