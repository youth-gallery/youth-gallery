import React, { useEffect, useState } from 'react';
import TopSearchNav from './nav/TopSearchNav';
import axios from 'axios';
import UserSearch from './UserSearch';

function Search() {
    const [keyword, setKeyword] = useState('');

    const [users, setUsers] = useState([]);
    const url = 'https://mandarin.api.weniv.co.kr';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE2MjM5ODJmZGNjNzEyZjQzMzk4YiIsImV4cCI6MTY2MjcwMTIyMiwiaWF0IjoxNjU3NTE3MjIyfQ.A75fUeLUj8TKdD1LVGGph-M1-coF8pr_oq8BY6R-k4k';

    useEffect(() => {
        axios({
            method: 'GET',
            url: url + `/user/searchuser/?keyword=${keyword}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            data: [
                {
                    _id: String,
                    username: String,
                    accountname: String,
                    following: [],
                    follower: [],
                    followerCount: Number,
                    followingCount: Number,
                },
            ],
        })
            .then((response) => setUsers(response))
            .then(console.log(users));
    }, [keyword]);

    const inputOnChange = (value) => {
        setKeyword(value);
        console.log(keyword);
    };
    return (
        <>
            <TopSearchNav propFunc={inputOnChange} />
            <ul>
                {users.data &&
                    users.data.map((user) => (
                        <li key={user._id}>
                            {/* {user.username} ({user.accountname}) */}
                            <UserSearch
                                userImg={user.image}
                                username={user.username}
                                accountname={user.accountname}
                            />
                        </li>
                    ))}
            </ul>
            <ul></ul>
        </>
    );
}

export default Search;
