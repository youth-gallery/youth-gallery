import styled from 'styled-components';
import React from 'react';
import iconArrowLeft from '../../assets/icon-arrow-left.png';
import { useNavigate } from 'react-router-dom';


function TopSearchNav(props) {
    const inputOnChange = (event) => {
        props.propFunc(event.target.value);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
  };
    return (
        <>
            <ArrowLeftButton name="back" onClick={handleGoBack} />
            <label id="idSearch"></label>
            <InputIdSearch
                type="text"
                name="계정검색"
                id="idSearch"
                className="inp-idSearch"
                placeholder="계정검색"
                onChange={inputOnChange}
            />
        </>
    );
}

const NavInput = styled.input`
    //reset
    border: initial;
`;

const ArrowLeftButton = styled.button`
    width: 22px;
    height: 22px;
    background-image: url(${iconArrowLeft});
    background-size: cover;
    cursor: pointer;
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

export default TopSearchNav;