import { size } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import Nav from '../../components/nav/Nav';
import TopMainNav from '../../components/nav/TopMainNav';
import HomePost from '../../components/PostForm/HomePost';
import TabMenu from '../../components/tab/TabMenu';
import axiosHomeList from '../../utils/axiosHomeList';
import NonFollowing from '../NonFollowing';
import * as S from './Styled';

function Home() {
    const [scrollY, setScrollY] = useState(window.pageYOffset);

    const handleFollow = useCallback(() => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }, []);

    useEffect(() => {
        console.log('ScrollY is ', scrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [scrollY]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        };
    });

    // const [loading, setLoading] = useState(false);
    const [postsInfo, setPostInfo] = useState([]);
    const loading = false;

    const homeList = useCallback(() => {
        axiosHomeList(10, 15).then((data) => setPostInfo(data)); //promise에서 response 추출
    }, []);

    useEffect(() => {
        homeList();
    }, []);
    // const url = 'https://mandarin.api.weniv.co.kr';
    // const getToken = localStorage.getItem('token');

    // useEffect(() => {
    //     setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
    //     axios({
    //         method: 'GET',
    //         url: url + `/post/feed/?limit=100&skip=0`,
    //         headers: {
    //             'Authorization': `Bearer ${getToken}`,
    //             'Content-type': 'application/json',
    //         },
    //     })
    //         .then(
    //             (response) => {
    //                 setPosts(response);
    //                 setLoading(false);
    //             }
    //             // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    //         )
    //         .catch((error) => console.log(error.message));
    // }, []);

    return (
        <>
            <Nav>
                <TopMainNav title={'youth-gallery 홈'} />
            </Nav>
            <S.Div>
                <S.PaddingDiv>
                    {loading ? (
                        <Loading />
                    ) : size(postsInfo) > 0 ? (
                        <S.View>
                            <S.ScrollBlind>
                                {postsInfo.map((post, i) => (
                                    <HomePost
                                        key={`${post.id}_${i}`}
                                        postsInfos={post}
                                    />
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
