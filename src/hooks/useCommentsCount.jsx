import axios from 'axios';
import { useState } from 'react';

const useCommentsCount = () => {
    const [commentsCount, setCount] = useState(0);
    const getToken = localStorage.getItem('token');
    async function renderCommentsCount(url) {
        try {
            axios(`https://mandarin.api.weniv.co.kr${url}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            })
                .then((response) => {
                    setCount(response.data.post.commentCount);
                })
                .then(console.log(count));
        } catch (error) {
            console.log(error);
        }
    }

    return [commentsCount, renderCommentsCount];
};

export default useCommentsCount;
