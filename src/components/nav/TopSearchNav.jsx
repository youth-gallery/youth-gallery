import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';

const NavStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 8px 13px;
`;

const NavButton = styled.button`
    //reset
    border: initial;
    background-color: initial;
`;

const NavInput = styled.input`
    //reset
    border: initial;
`;

const ArrowLeftButton = styled(NavButton)`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
`;

const InputIdSearch = styled(NavInput)`
    margin-left: 20px;
    padding-left: 16px;
    height: 32px;
    width: 100%;
    border-radius: 32px;
    background-color: #f2f2f2;
    color: #000000;
`;

function TopSearchNav(props) {
    const inputOnChange = (event) => {
        props.propFunc(event.target.value);
    };
    return (
        <>
            <NavStyle className="nav">
                <ArrowLeftButton />
                <label id="idSearch"></label>
                <InputIdSearch
                    type="text"
                    name="계정검색"
                    id="idSearch"
                    className="inp-idSearch"
                    placeholder="계정검색"
                    onChange={inputOnChange}
                />
            </NavStyle>
        </>
    );
}

export default TopSearchNav;
