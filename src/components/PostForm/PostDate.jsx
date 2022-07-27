import React from 'react';
import styled from 'styled-components';

const HomePostDate = styled.span`
    display: block;
    margin-top: 12px;
    margin-bottom: 4px;
    color: #767676;
    font-size: 10px;
    line-height: 1.2;
`;

function PostDate({ updatedAt }) {
    const postDate = new Date(updatedAt);
    return (
        <HomePostDate>
            {`${postDate.getFullYear()}년 ${
                postDate.getMonth() + 1
            }월 ${postDate.getDate()}일`}
        </HomePostDate>
    );
}

export default PostDate;
