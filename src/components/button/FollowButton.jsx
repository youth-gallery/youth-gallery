import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FollowButtonBody = styled.button`
    background-color: var(--logo-yellow);
    border: initial;
    width: 100%;
    padding: 8px 0;
    border-radius: 30px;
    cursor: pointer;
`;

const Span = styled.span`
    color: var(--logo-black);
    font-size: 1.4rem;
`;

function FollowButton() {
    const { accountname } = useParams();
    const [state, setState] = useState(false);

    const handleFollow = () => {
        const getToken = localStorage.getItem('token');
        axios
            .post(
                `https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                console.log(res.data.profile.isfollow);
                setState(res.data.profile.isfollow);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    console.log(state);
    return (
        <>
            <FollowButtonBody onClick={handleFollow}>
                <Span>팔로우</Span>
            </FollowButtonBody>
        </>
    );
}

export default FollowButton;
