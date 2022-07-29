import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './UserInfo.module.css';
import FollowButton from './button/FollowButton';
import UnFollowButton from './button/UnFollowButton';
import { useState } from 'react';
import { useEffect } from 'react';

function UserInfo({ profileData }) {
    const getAccountName = localStorage.getItem('accountname');
    const { accountname } = useParams();
    const { myprofile } = useParams();
    const getToken = localStorage.getItem('token');
    const [state, setState] = useState(profileData.isfollow);
    useEffect(() => {
        setState(profileData.isfollow);
    }, [profileData]);

    const handleButton = () => {
        if (profileData.isfollow) {
            axios
                .delete(
                    `https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`,
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    const isFollow = res.data.profile.isfollow;
                    setState(isFollow);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    `https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data.profile.isfollow);
                    const isFollow = res.data.profile.isfollow;
                    setState(isFollow);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        console.log(state);
    };
    return (
        <div className={styles.all_warpper}>
            <div className={styles.top_warpper}>
                <dl className={styles.num_warpper}>
                    <dt className={styles.num}>{profileData.followerCount}</dt>
                    <dd className={styles.num_title}>followers</dd>
                </dl>
                <img
                    className={styles.profile_img}
                    src={profileData.image}
                    alt=""
                />
                <dl className={styles.num_warpper}>
                    <dt className={styles.num}>{profileData.followingCount}</dt>
                    <dd className={styles.num_title}>followings</dd>
                </dl>
            </div>
            <p className={styles.user_name}>{profileData.username}</p>
            <p className={styles.user_id}>{`@${profileData.accountname}`}</p>
            <p className={styles.user_intro}>{profileData.intro}</p>
            <ul className={styles.button_warp}>
                {accountname === getAccountName || myprofile ? (
                    <>
                        <li>
                            <button className={styles.edit_profile_button}>
                                프로필 수정
                            </button>
                        </li>
                        <Link to="/product">
                            <li>
                                <button className={styles.add_product_button}>
                                    상품 등록
                                </button>
                            </li>
                        </Link>
                    </>
                ) : (
                    <>
                        <li>
                            <button
                                className={`${styles.circle_button} ${styles.chat_button}`}
                                type="button"
                            ></button>
                        </li>
                        <li
                            className={styles.follow_button_warp}
                            onClick={handleButton}
                        >
                            {profileData.isfollow === false ? (
                                <FollowButton />
                            ) : (
                                <UnFollowButton />
                            )}
                        </li>
                        <li>
                            <button
                                className={`${styles.circle_button} ${styles.shared}`}
                            ></button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default UserInfo;
