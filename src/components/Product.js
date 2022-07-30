import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ButtonModalActive from './modal/ButtonModalActive';

function Product({ productList, i }) {
    const { myprofile } = useParams();
    const post_id = productList[i].id;

    // 모달관련
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
        console.log(showModal);
    };

    const closeModal = () => {
        setShowModal(false);
        console.log(closeModal);
    };

    const ContentWrap = styled.li`
        width: fit-content;
        text-align: start;
        background-color: #fff;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    `;
    const deleteProduct = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');

        try {
            await axios.delete(`${url}/product/${post_id}`, {
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            alert('삭제하였습니다.');
            setShowModal(false);
        } catch (error) {
            <Link to="/notFound" />;
            console.log(error);
        }
        console.log(post_id);
    };
    return (
        <>
            <ContentWrap onClick={openModal}>
                <ProductImg src={productList[i].itemImage} />
                <ProductName>{productList[i].itemName}</ProductName>
                <ProductPrice>{`${productList[i].price.toLocaleString(
                    'ko-KR'
                )}원`}</ProductPrice>
            </ContentWrap>
            {myprofile ? (
                <ButtonModalActive
                    propState={showModal}
                    propsCloseFunc={closeModal}
                    postModalValues={{
                        values: ['삭제', '수정'],
                    }}
                    post_id={post_id}
                    innerAlertValues={{
                        title: '상품을 삭제할까요? ',
                        rightText: '삭제',
                        rightBtnPropFunc: deleteProduct,
                    }}
                />
            ) : null}
        </>
    );
}

const ProductImg = styled.img`
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 6px;
`;

const ProductName = styled.p`
    font-size: 1.4rem;
    line-height: 17.53px;
    color: #000;
    margin: 0;
    margin-bottom: 4px;
`;

const ProductPrice = styled.span`
    font-size: 1.2rem;
    line-height: 15.02px;
    color: #212121;
`;

export default Product;
