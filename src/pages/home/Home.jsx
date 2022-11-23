import React, { useEffect, useState } from 'react';
import HomePost from '../../components/PostForm/HomePost';
import axios from 'axios';
import TabMenu from '../../components/tab/TabMenu';
import Nav from '../../components/nav/Nav';
import TopMainNav from '../../components/nav/TopMainNav';
import NonFollowing from '../NonFollowing';
import Loading from '../../components/loading/Loading';
import * as S from './Styled';

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
            <S.Div>
                <S.PaddingDiv>
                    {loading ? (
                        <Loading />
                    ) : posts.data && posts.data.posts.length !== 0 ? (
                        <S.View>
                            <S.ScrollBlind>
                                {posts.data.posts.map((post) => (
                                    <HomePost key={post.id} datas={post} />
                                ))}
                            </S.ScrollBlind>
                        </S.View>
                    ) : (
                        <NonFollowing />
                    )}
                </S.PaddingDiv>
            </S.Div>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Home;
