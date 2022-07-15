import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FollowersList.module.css';
import TopBasicNav from '../components/nav/TopBasicNav';
import UserFollow from '../components/UserFollow';

function FollowersList() {
  const [followers, setFollowers] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjNTJiODJmZGNjNzEyZjQzODgyOSIsImV4cCI6MTY2MjcxMjQ1MSwiaWF0IjoxNjU3NTI4NDUxfQ.bnhQqSrauikpfrLKP6OXl2HMdizZdeM1TclnNTr1OXk';

  useEffect(() => {
    axios
      .get('https://mandarin.api.weniv.co.kr/profile/0002/follower', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
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
      <TopBasicNav styles={styles} navTitle={navTitle}></TopBasicNav>
      <ul className={styles.user_follow_warp}>
        {followers && followers.map((_, i) => {
          console.log(followers[i]._id);
          console.log(followers[0]._id);
          return (
            <>
              <UserFollow styles={styles} followers={followers} i={i} key={followers[i]._id} />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default FollowersList;