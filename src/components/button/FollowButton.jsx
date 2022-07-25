import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

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
    const follow = () => {
        // 0004 임시토큰
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDg1MzkxMTdhZTY2NjU4MTdlNjY3MyIsImV4cCI6MTY2MzkzMzg1NSwiaWF0IjoxNjU4NzQ5ODU1fQ.pDSDuGNU51d1C8TI2_-wcADNOSqKkf_lJL3oMBB0clo';
        axios
            .post(
                'https://mandarin.api.weniv.co.kr/profile/0002/follow',
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
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
            <FollowButtonBody onClick={follow}>
                <Span>팔로우</Span>
            </FollowButtonBody>
        </>
    );
}

export default FollowButton;
