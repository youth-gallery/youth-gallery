import React, { useEffect, useState } from 'react';
import TopSearchNav from '../components/nav/TopSearchNav';
import axios from 'axios';
import UserSearch from '../components/UserSearch';
import Nav from '../components/nav/Nav';
import TabMenu from '../components/tab/TabMenu';
import styled from 'styled-components';
import Loding from '../components/loding/Loding';

const Ul = styled.ul`
    padding: 60px 0;
    margin: 0 16px;
    height: 100vh;
`;

const Li = styled.li`
    padding-top: 16px;
`;

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
                <Loding />
            ) : (
                <Ul>
                    {users.data && users.data.length ? (
                        users.data.map((user) => (
                            <Li key={user._id}>
                                <UserSearch
                                    userImg={user.image}
                                    username={user.username}
                                    accountname={user.accountname}
                                    keyword={keyword}
                                />
                            </Li>
                        ))
                    ) : keyword === null ? (
                        <p>계정을 검색해 작가님을 만나보세요!</p>
                    ) : (
                        <p>검색할 수 있는 계정이 없습니다.</p>
                    )}
                </Ul>
            )}
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Search;
