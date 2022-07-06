import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';

function TopSearchNav() {
    return (
        <>
            <NavStyle className="nav">
                <button className="arrow-left"></button>
                <label id="idSearch"></label>
                <input
                    type="text"
                    name="계정검색"
                    id="idSearch"
                    className="inp-idSearch"
                    placeholder="계정검색"
                />
            </NavStyle>
        </>
    );
}

export default TopSearchNav;

const NavStyle = styled.section`
    //reset
    button {
        border: initial;
        background-color: initial;
    }
    input {
        border: initial;
    }
    //
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 8px 13px;
    .arrow-left {
        width: 22px;
        height: 22px;
        background-image: url(${iconArrowLeft});
        background-size: cover;
    }
    .inp-idSearch {
        margin-left: 20px;
        padding-left: 16px;
        height: 32px;
        width: 100%;
        border-radius: 32px;
        background-color: #f2f2f2;
        color: #c4c4c4;
    }
`;
