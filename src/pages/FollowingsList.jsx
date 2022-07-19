import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './FollowersList.module.css';
import TopBasicNav from '../components/nav/TopBasicNav';
import UserFollow from '../components/UserFollow';

function FollowingsList() {
    const [followings, setFollowings] = useState([]);
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjNTJiODJmZGNjNzEyZjQzODgyOSIsImV4cCI6MTY2MjcxMjQ1MSwiaWF0IjoxNjU3NTI4NDUxfQ.bnhQqSrauikpfrLKP6OXl2HMdizZdeM1TclnNTr1OXk';
    useEffect(() => {
        axios
            .get('https://mandarin.api.weniv.co.kr/profile/0002/following', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                setFollowings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(followings);
    const navTitle = 'Followings';
    return (
        <div className={styles.followers_page}>
            <TopBasicNav styles={styles} navTitle={navTitle}></TopBasicNav>
            <ul className={styles.user_follow_warp}>
                {followings &&
                    followings.map((_, i) => {
                        return (
                            <>
                                <UserFollow
                                    followers={followings}
                                    i={i}
                                    key={followings[i]._id}
                                />
                            </>
                        );
                    })}
            </ul>
        </div>
    );
}

export default FollowingsList;
