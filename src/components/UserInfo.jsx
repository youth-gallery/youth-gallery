import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserInfo.module.css';
import FollowButton from './button/FollowButton';

function UserInfo({ profileData }) {
    const getToken = localStorage.getItem('token');
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
                {profileData.accountname === getToken ? (
                    <>
                        <li>
                            <button
                                className={`${styles.circle_button} ${styles.chat_button}`}
                                type="button"
                            ></button>
                        </li>
                        <li className={styles.follow_button_warp}>
                            <FollowButton />
                        </li>
                        <li>
                            <button
                                className={`${styles.circle_button} ${styles.shared}`}
                            ></button>
                        </li>
                    </>
                ) : (
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
                )}
            </ul>
        </div>
    );
}

export default UserInfo;
