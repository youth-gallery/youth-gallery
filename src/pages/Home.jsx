import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePost from '../components/HomePost';
// import HomePostOnlyTxt from '../components/HomePostOnlyTxt';
import axios from 'axios';
import TopBasicNav from '../components/nav/TopBasicNav';
import TabMenu from '../components/tab/TapMenu';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 60px auto 60px;
`;

function Home() {
    const [posts, setPosts] = useState([]);

    const url = 'https://mandarin.api.weniv.co.kr';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE2MjM5ODJmZGNjNzEyZjQzMzk4YiIsImV4cCI6MTY2MjcwMTIyMiwiaWF0IjoxNjU3NTE3MjIyfQ.A75fUeLUj8TKdD1LVGGph-M1-coF8pr_oq8BY6R-k4k';

    useEffect(() => {
        axios({
            method: 'GET',
            url: url + `/post/feed`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        })
            .then((response) => setPosts(response))
            .catch((error) => console.log(error.message));
    }, []);
    console.log(posts);
    return (
        <>
            <TopBasicNav title={'youth-gallery 홈'} />
            <Div>
                {posts.data &&
                    posts.data.posts.map((post) => (
                        <HomePost key={post.id} datas={post} />
                    ))}
                {/* <HomePostOnlyTxt /> */}
            </Div>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Home;
