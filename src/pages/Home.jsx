import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePost from '../components/PostForm/HomePost';
import axios from 'axios';
import TabMenu from '../components/tab/TabMenu';
import Nav from '../components/nav/Nav';
import TopMainNav from '../components/nav/TopMainNav';

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
    localStorage.setItem('token', token);
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        axios({
            method: 'GET',
            url: url + `/post/feed`,
            headers: {
                'Authorization': `Bearer ${getToken}`,
                'Content-type': 'application/json',
            },
        })
            .then((response) => setPosts(response))
            .catch((error) => console.log(error.message));
    }, []);
    console.log(posts);
    return (
        <>
            <Nav>
                <TopMainNav title={'youth-gallery 홈'} />
            </Nav>
            <Div>
                {posts.data &&
                    posts.data.posts.map((post) => (
                        <HomePost key={post.id} datas={post} />
                    ))}
            </Div>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Home;
