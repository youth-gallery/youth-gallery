import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FollowersList.module.css';
import Nav from '../components/nav/Nav';
import TopBasicNav from '../components/nav/TopBasicNav';
import UserFollow from '../components/UserFollow';
import { useParams } from 'react-router-dom';

function FollowersList() {
    const [followers, setFollowers] = useState([]);
    const getToken = localStorage.getItem('token');
    const { accountname } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://mandarin.api.weniv.co.kr/profile/${accountname}/follower`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                // console.log(res);
                setFollowers(res.data);
                console.log(res);
                // console.log(followers);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(followers);
    const navTitle = 'Followers';
    return (
        <div className={styles.followers_page}>
            <Nav>
                <TopBasicNav styles={styles} title={navTitle}></TopBasicNav>
            </Nav>
            <ul className={styles.user_follow_warp}>
                {followers &&
                    followers.map((_, i) => {
                        console.log(followers[i]._id);
                        console.log(followers[0]._id);
                        return (
                            <>
                                <UserFollow
                                    styles={styles}
                                    followers={followers}
                                    i={i}
                                    key={followers[i]._id}
                                />
                            </>
                        );
                    })}
            </ul>
        </div>
    );
}

export default FollowersList;
