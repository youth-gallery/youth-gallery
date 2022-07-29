import React from 'react';
import styles from './PostForm.module.css';
import axios from 'axios';
import { useState } from 'react';

const PostForm = (props) => {
    const [profileImg, setProfileImg] = useState();

    // 현재 로그인 기능이 없어 임시로 사용자와 토큰을 설정했습니다
    const renderProfile = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        const accountName = localStorage.getItem('accountname');

        try {
            const res = await axios.get(`${url}/profile/${accountName}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            const userProfile = await res.data.profile.image;
            setProfileImg(userProfile);
        } catch (error) {
            console.log(error);
        }
    };
    renderProfile();

    return (
        <>
            <form onSubmit={props.onSubmit} className={styles.form_div}>
                <img
                    src={profileImg}
                    className={styles.form_profile}
                    alt="프로필 이미지"
                />
                {props.children}
            </form>
        </>
    );
};

export default PostForm;
