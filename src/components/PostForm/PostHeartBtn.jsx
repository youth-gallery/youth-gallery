import React, { useState } from 'react';
import styled from 'styled-components';
import heartIcon from '../../assets/icon-heart.png';
import heartIconFill from '../../assets/icon-heartFill.png';
import axios from 'axios';

const PostBtn = styled.button`
    width: 45px;
    height: 20px;
    padding-left: 10px;
`;

const HeartBtn = styled(PostBtn)`
    background: url(${(props) => props.img || heartIcon}) no-repeat left / 18px
        18px;
    border: none;
    cursor: pointer;
    color: #767676;
`;

function PostHeartBtn({ datas_id, hearted, heartCount }) {
    const [state, setState] = useState(hearted);
    const [count, setCount] = useState(heartCount);
    const url = 'https://mandarin.api.weniv.co.kr';
    const getToken = localStorage.getItem('token');
    async function useAxios(url = '', method = '') {
        try {
            axios(url, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            })
                .then((response) => {
                    setState(response.data.post.hearted);
                    setCount(response.data.post.heartCount);
                })
                .then(console.log(state))
                .then(console.log(count));
        } catch (error) {
            console.log(error);
        }
    }
    const onClick = () => {
        state
            ? useAxios(url + `/post/${datas_id}/unheart`, 'DELETE')
            : useAxios(url + `/post/${datas_id}/heart`, 'POST');
    };
    console.log(state);
    return (
        <>
            {state ? (
                <HeartBtn img={heartIconFill} onClick={onClick}>
                    {count}
                </HeartBtn>
            ) : (
                <HeartBtn img={heartIcon} onClick={onClick}>
                    {count}
                </HeartBtn>
            )}
        </>
    );
}

export default PostHeartBtn;
