import React, { useEffect, useState } from 'react';
import TopSearchNav from '../components/nav/TopSearchNav';
import axios from 'axios';
import Nav from '../components/nav/Nav';
import TabMenu from '../components/tab/TabMenu';
import styled from 'styled-components';
import Loading from '../components/loading/Loading';
import NonSearch from '../components/search/NonSearch';
import ShowSearch from '../components/search/ShowSearch';
import RecommendSearch from '../components/search/RecomendSearch';

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
                <View>
                    <ScrollBlind>
                        <Ul>
                            {users.data && users.data.length ? (
                                <ShowSearch users={users} keyword={keyword} />
                            ) : keyword === null ? (
                                <RecommendSearch />
                            ) : (
                                <NonSearch />
                            )}
                        </Ul>
                    </ScrollBlind>
                </View>
            )}
            <TabMenu img={'homeImg'} />
        </>
    );
}

const View = styled.div`
    width: 450px;
    height: 100%;
    position: absolute;
    overflow: hidden;
`;

const ScrollBlind = styled.div`
    width: 480px;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
`;

const Ul = styled.ul`
    padding: 60px 0;
    margin: 0 16px;
    height: 100vh;
`;

export default Search;
