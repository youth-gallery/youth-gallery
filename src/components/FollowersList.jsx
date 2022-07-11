import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBasicNav from './nav/TopBasicNav';
import UserFollow from './UserFollow';
import TapMenu from './tab/TapMenu';

function FollowerList() {
    const [followers, setFollowers] = useState([]);
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjNTJiODJmZGNjNzEyZjQzODgyOSIsImV4cCI6MTY2MjcxMjQ1MSwiaWF0IjoxNjU3NTI4NDUxfQ.bnhQqSrauikpfrLKP6OXl2HMdizZdeM1TclnNTr1OXk';

    useEffect(() => {
        axios
            .get('https://mandarin.api.weniv.co.kr/profile/0002/follower', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                console.log(res);
                setFollowers(res.data);
                console.log(followers);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <TopBasicNav />
            {followers.map((_, i) => {
                return (
                    <>
                        <UserFollow followers={followers} i={i} />
                    </>
                );
            })}
            <TapMenu />
        </div>
    );
}

export default FollowerList;
