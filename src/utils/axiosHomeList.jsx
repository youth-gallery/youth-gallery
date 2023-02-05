import axios from 'axios';

const URL = 'https://mandarin.api.weniv.co.kr';
const getToken = localStorage.getItem('token');

const axiosHomeList = async (limit, skip) => {
    const response = await axios
        .get(URL + `/post/feed/?limit=${limit}&skip=${skip}`, {
            headers: {
                'Authorization': `Bearer ${getToken}`,
                'Content-type': 'application/json',
            },
        })
        .catch((error) => console.log(error));
    return response.data.posts;
};

export default axiosHomeList;
