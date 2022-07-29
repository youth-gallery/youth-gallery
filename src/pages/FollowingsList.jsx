import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './FollowersList.module.css';
import TopBasicNav from '../components/nav/TopBasicNav';
import UserFollow from '../components/UserFollow';
import { useParams } from 'react-router-dom';
import Nav from '../components/nav/Nav';

function FollowingsList() {
    const [followings, setFollowings] = useState([]);
    const getToken = localStorage.getItem('token');
    const { accountname } = useParams();
    useEffect(() => {
        axios
            .get(
                `https://mandarin.api.weniv.co.kr/profile/${accountname}/following`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
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
            <Nav>
                <TopBasicNav styles={styles} navTitle={navTitle}></TopBasicNav>
            </Nav>
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
