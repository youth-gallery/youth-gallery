import React from 'react';
import styled from 'styled-components';

function DeleteAlert({
    title,
    rightText,
    closeModalPropFunc,
    rightBtnPropFunc,
}) {
    const closeModal = () => {
        closeModalPropFunc(false);
    };
    const rightBtnOnClick = () => {
        rightBtnPropFunc(true);
    };
    return (
        <Article>
            <Message>{title}</Message>
            <ButtonWarp>
                <Button
                    color="#000"
                    border="1px solid #DBDBDB"
                    onClick={closeModal}
                >
                    취소
                </Button>
                <Button color="#EA4335" onClick={rightBtnOnClick}>
                    {rightText}
                </Button>
            </ButtonWarp>
        </Article>
    );
}

const Article = styled.article`
    width: fit-content;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
`;

const Message = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 22px 0;
    text-align: center;
`;
const ButtonWarp = styled.div`
    display: flex;
    border-top: 1px solid #dbdbdb;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: 400;
    width: 126px;
    height: 46px;
    color: ${(props) => props.color};
    background-color: inherit;
    border: none; // 아직 reset.css 없어서 넣은 부분
    border-right: ${(props) => props.border};
    padding: 0;
    cursor: pointer;
`;

export default DeleteAlert;
