import React, { useEffect, useState } from 'react';
import TopSearchNav from '../../components/nav/TopSearchNav';
import axios from 'axios';
import Nav from '../../components/nav/Nav';
import TabMenu from '../../components/tab/TabMenu';
import Loading from '../../components/loading/Loading';
import NonSearch from '../../components/search/NonSearch';
import ShowSearch from '../../components/search/ShowSearch';
import RecommendSearch from '../../components/search/RecomendSearch';
import * as S from "./Styled"

function Search() {
    const [keyword, setKeyword] = useState(null);
    const [users, setUsers] = useState([]);

    const url = 'https://mandarin.api.weniv.co.kr';

    const getToken = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);

        axios({
            method: 'GET',
            url: url + `/user/searchuser/?keyword=${keyword}`,
            headers: {
                'Authorization': `Bearer ${getToken}`,
                'Content-type': 'application/json',
            },
        })
            .then((response) => {
                setUsers(response);
                setLoading(false);
            })
            .then(keyword === '' ? setKeyword(null) : setKeyword(keyword));
    }, [keyword]);

    const inputOnChange = (value) => {
        setKeyword(value);
    };

    return (
        <>
            <Nav>
                <TopSearchNav propFunc={inputOnChange} />
            </Nav>
            {loading ? (
                <Loading />
            ) : (
                <S.View>
                    <S.ScrollBlind>
                        <S.Ul>
                            {users.data && users.data.length ? (
                                <ShowSearch users={users} keyword={keyword} />
                            ) : keyword === null ? (
                                <RecommendSearch />
                            ) : (
                                <NonSearch />
                            )}
                        </S.Ul>
                    </S.ScrollBlind>
                </S.View>
            )}
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Search;
