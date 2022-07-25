import React, { useState } from 'react';
import styles from './JoinMembership.module.css';
import Title from '../login/Title';

function JoinMembership() {
    const [file, setFile] = useState('');
    console.log(file);
    const backgroundstyle = {
        backgroundImage: `url('${file}')`,
    };

    return (
        <>
            <section className={styles.joinMembership_body}>
                <Title title={'프로필 설정'} />
                <span className={styles.joinMembership_titleSpan}>
                    나중에 언제든지 변경할 수 있습니다.
                </span>
                <div className={styles.joinMembership_uploadContainer}>
                    <div className={styles.preview} style={backgroundstyle} />

                    <label
                        htmlFor="input_file"
                        className={styles.joinMembership_fileImg}
                    />
                    <input
                        type="file"
                        id="input_file"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setFile(URL.createObjectURL(e.target.files[0]));
                        }}
                    />
                </div>

                <label htmlFor="input_userName">사용자 이름</label>
                <input
                    id="input_userName"
                    type="text"
                    placeholder="2~10자 이내여야 합니다."
                    onChange={(e) => {
                        e.target.value;
                    }}
                />

                <label htmlFor="input_accountId">계정 ID</label>
                <input
                    id="input_accountId"
                    type="text"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    onChange={(e) => {
                        e.target.value;
                    }}
                />

                <label htmlFor="input_intro">소개</label>
                <input
                    id="input_intro"
                    type="text"
                    placeholder="자신과 전시할 작품에 대해 소개해주세요!"
                    onChange={(e) => {
                        e.target.value;
                    }}
                />

                {/* <LoginInput
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
                /> */}
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
