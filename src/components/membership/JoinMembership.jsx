import React from 'react';
import styles from './JoinMembership.module.css';
import LoginInput from '../LoginInput';
import Title from '../login/Title';

function JoinMembership() {
    return (
        <>
            <section className={styles.joinMembership_body}>
                <Title title={'프로필 설정'} />
                <span className={styles.joinMembership_titleSpan}>
                    나중에 언제든지 변경할 수 있습니다.
                </span>
                <div className={styles.joinMembership_uploadImg}>
                    <div className={styles.joinMembership_fileImg}></div>
                </div>
                <LoginInput
                    title={'사용자 이름'}
                    placeholder={'2~10자 이내여야 합니다.'}
                    type={'text'}
                />
                <LoginInput
                    title={'계정 ID'}
                    placeholder={
                        '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                    }
                    type={'text'}
                />
                <LoginInput
                    title={'소개'}
                    placeholder={'자신과 전시할 작품에 대해 소개해주세요!'}
                    type={'text'}
                />
                <button className={styles.joinMembership_btn}>
                    <span className={styles.joinMembership_btnSpan}>
                        유스갤러리 시작하기
                    </span>
                </button>
            </section>
        </>
    );
}

export default JoinMembership;
