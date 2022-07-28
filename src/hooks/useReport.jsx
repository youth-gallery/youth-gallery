import axios from 'axios';

function useReport(url) {
    const getToken = localStorage.getItem('token');
    axios({
        method: 'POST',
        url: `https://mandarin.api.weniv.co.kr${url}`,
        headers: {
            'Authorization': `Bearer ${getToken}`,
            'Content-type': 'application/json',
        },
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
}

export default useReport;
