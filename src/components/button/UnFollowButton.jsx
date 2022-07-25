import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    const unfollow = () => {
        // 0004 임시토큰
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDg1MzkxMTdhZTY2NjU4MTdlNjY3MyIsImV4cCI6MTY2MzkzMzg1NSwiaWF0IjoxNjU4NzQ5ODU1fQ.pDSDuGNU51d1C8TI2_-wcADNOSqKkf_lJL3oMBB0clo';
        axios
            .delete('https://mandarin.api.weniv.co.kr/profile/0002/unfollow', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <UnFollowButtonBody onClick={unfollow}>
                <Span>언팔로우</Span>
            </UnFollowButtonBody>
        </>
    );
}

export default UnFollowButton;
