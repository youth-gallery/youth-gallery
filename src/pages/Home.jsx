import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePost from '../components/PostForm/HomePost';
import axios from 'axios';
import TabMenu from '../components/tab/TabMenu';
import Nav from '../components/nav/Nav';
import TopMainNav from '../components/nav/TopMainNav';
import NonFollowing from './NonFollowing';
import Loading from '../components/loading/Loading';

function Home() {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    const url = 'https://mandarin.api.weniv.co.kr';
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
        axios({
            method: 'GET',
            url: url + `/post/feed/?limit=100&skip=0`,
            headers: {
                'Authorization': `Bearer ${getToken}`,
                'Content-type': 'application/json',
            },
        })
            .then(
                (response) => {
                    setPosts(response);
                    setLoading(false);
                }
                // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
            )
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <>
            <Nav>
                <TopMainNav title={'youth-gallery 홈'} />
            </Nav>
            <Div>
                <PaddingDiv>
                    {loading ? (
                        <Loading />
                    ) : posts.data && posts.data.posts.length !== 0 ? (
                        <View>
                            <ScrollBlind>
                                {posts.data.posts.map((post) => (
                                    <HomePost key={post.id} datas={post} />
                                ))}
                            </ScrollBlind>
                        </View>
                    ) : (
                        <NonFollowing />
                    )}
                </PaddingDiv>
            </Div>
            <TabMenu img={'homeImg'} />
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    position: relative;
`;

const PaddingDiv = styled.div`
    padding: 55px 0;
`;

const View = styled.div`
    width: 440px;
    height: 90vh;
    position: absolute;
    overflow: hidden;
    left: 0;
`;

const ScrollBlind = styled.div`
    width: 480px;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
`;
export default Home;
