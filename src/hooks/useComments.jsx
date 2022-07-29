import axios from 'axios';
import { useState } from 'react';

const useComments = () => {
    const [commentList, setCommentList] = useState([]);

    async function renderComments(postId) {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        try {
            const res = await axios.get(`${url}/post/${postId}/comments`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            setCommentList(res.data.comments);
        } catch (error) {
            console.log(error);
        }
    }

    return [commentList, renderComments];
};

export default useComments;
