import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <ContentWrap>
            <ProductImg />
            <ProductName>상품이름</ProductName>
            <ProductPrice>상품 가격</ProductPrice>
        </ContentWrap>
    );
}

const ContentWrap = styled.article`
    width: fit-content;
    text-align: start;
    background-color: #fff;
`;

const ProductImg = styled.img`
    width: 140px;
    height: 90px;
    border-radius: 8px;
    margin-bottom: 6px;
`;

const ProductName = styled.p`
    font-size: 14px;
    line-height: 17.53px;
    color: #000;
    margin: 0;
    margin-bottom: 4px;
`;

const ProductPrice = styled.span`
    font-size: 12px;
    line-height: 15.02px;
    color: #212121;
`;

export default Product;
