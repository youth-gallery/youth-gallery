import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './UserInfo.module.css';
import FollowButton from './button/FollowButton';
import UnFollowButton from './button/UnFollowButton';
import { useState } from 'react';
// import { useEffect } from 'react';

function UserInfo({ profileData, followState, getFollowState }) {
    const getToken = localStorage.getItem('token');
    const getAccountName = localStorage.getItem('accountname');
    const { accountname } = useParams();
    const [isFollow, setIsFollow] = useState(followState);
    const [followerCount, setFollowerCount] = useState(
        profileData.followerCount
    );
    const [followingCount, setFollowingCount] = useState(
        profileData.followingCount
    );
    const [viewProfile, setViewProfile] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(viewProfile);

    useEffect(() => {
        setFollowerCount(profileData.followerCount);
        setFollowingCount(profileData.followingCount);
        setIsFollow(followState);
    }, [profileData]);

    console.log(profileData.followerCount);

    const handleButton = () => {
        if (isFollow) {
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
                    const data = res.data.profile;
                    setFollowerCount(data.followerCount);
                    setFollowingCount(data.followingCount);
                    const isFollow = res.data.profile.isfollow;
                    setIsFollow(isFollow);
                    getFollowState(isFollow);
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
                    const data = res.data.profile;
                    setFollowerCount(data.followerCount);
                    setFollowingCount(data.followingCount);
                    setIsFollow(isFollow);
                    getFollowState(isFollow);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        console.log(isFollow);
    };

    // 프로필수정 버튼 클릭시 동작 기능
    const handleEditProfile = (e) => {
        e.preventDefault();

        navigate('/myprofile/edit');
        setViewProfile(false);
        console.log(`viewProfile ${viewProfile}`);
        // const img = uploadImage();
        // try {
        //     const res = await axios.put(
        //         'https://mandarin.api.weniv.co.kr/user/',
        //         {
        //             user: {
        //                 username: userName,
        //                 accountname: accountId,
        //                 intro: intro,
        //                 image: await img,
        //             },
        //         }
        //     );
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>
            {viewProfile ? (
                <div className={styles.all_warpper}>
                    <div className={styles.top_warpper}>
                        <dl className={styles.num_warpper}>
                            <dt className={styles.num}>{followerCount}</dt>
                            <dd className={styles.num_title}>followers</dd>
                        </dl>
                        <img
                            className={styles.profile_img}
                            src={profileData.image}
                            alt=""
                        />
                        <dl className={styles.num_warpper}>
                            <dt className={styles.num}>{followingCount}</dt>
                            <dd className={styles.num_title}>followings</dd>
                        </dl>
                    </div>
                    <p className={styles.user_name}>{profileData.username}</p>
                    <p
                        className={styles.user_id}
                    >{`@${profileData.accountname}`}</p>
                    <p className={styles.user_intro}>{profileData.intro}</p>
                    <ul className={styles.button_warp}>
                        {accountname === getAccountName ||
                        location.pathname === '/myprofile' ? (
                            <>
                                <li>
                                    <button
                                        className={styles.edit_profile_button}
                                        onClick={handleEditProfile}
                                    >
                                        프로필 수정
                                    </button>
                                </li>
                                <Link to="/product">
                                    <li>
                                        <button
                                            className={
                                                styles.add_product_button
                                            }
                                        >
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
                                    {isFollow === false ? (
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
            ) : null}
        </>
    );
}

export default UserInfo;
