import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UnFollowButtonBody = styled.button`
    background-color: #ffffff;
    width: 100%;
    padding: 8px 0;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
    cursor: pointer;
`;

const Span = styled.span`
    color: var(--gray-color);
    font-size: 1.4rem;
`;

function UnFollowButton() {
    const { accountname } = useParams();
    const handleUnfollow = () => {
        const getToken = localStorage.getItem('token');
        axios
            .delete(
                `https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <UnFollowButtonBody onClick={handleUnfollow}>
                <Span>언팔로우</Span>
            </UnFollowButtonBody>
        </>
    );
}

export default UnFollowButton;
