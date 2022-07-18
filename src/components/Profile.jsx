import React from 'react';
import styles from './Profile.module.css';

function Profile({ profileData }) {
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
                <li>
                    <button
                        className={styles.circle_button}
                        type="button"
                    ></button>
                </li>
                <li>
                    {/* 추후 버튼 컴포넌트로 수정할 코드 */}
                    <div>팔로우</div>
                </li>
                <li>
                    <button
                        className={`${styles.circle_button} ${styles.shared}`}
                    ></button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
