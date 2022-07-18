import React from 'react';
import styles from './PostForm.module.css';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
    const [profileImg, setProfileImg] = useState();

    // 현재 로그인 기능이 없어 임시로 사용자와 토큰을 설정했습니다
    const renderProfile = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2FkNjA3ODJmZGNjNzEyZjQzN2QyZCIsImV4cCI6MTY2MjcxMDYxOCwiaWF0IjoxNjU3NTI2NjE4fQ.w47m557FRqRQhF8PGM_VUxF10mFtDexYJIxqUasFQ7I';
        const accountName = 'fff';
        localStorage.setItem('token', token);
        const getToken = localStorage.getItem('token');

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
            <form className={styles.form_div}>
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

PostForm.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PostForm;
