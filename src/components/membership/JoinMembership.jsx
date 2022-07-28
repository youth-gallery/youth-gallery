import React, { useState } from 'react';
import styles from './JoinMembership.module.css';
import Title from '../login/Title';

function JoinMembership() {
    const [userName] = useState('');
    const [accountId] = useState('');
    // const [intro, setIntro] = useState('');
    const [userNameConfirm, setUserNameConfirm] = useState(false);
    const [accountIdConfirm, setAccountIdConfirm] = useState(false);
    const [accountIdMsg, setAccountIdMsg] = useState('');
    const [file, setFile] = useState('');
    console.log(file);
    const backgroundstyle = {
        backgroundImage: `url('${file}')`,
    };
    console.log(userName);
    console.log(userNameConfirm);
    console.log(accountId);
    console.log(accountIdConfirm);
    console.log(accountIdMsg);

    const handleUserName = (e) => {
        const userName = e.target.value;

        // 사용자이름 유효성검사 (2~10자 이내만 통과)
        userName.length >= 2 && userName.length <= 10
            ? setUserNameConfirm(true)
            : setUserNameConfirm(false);
    };

    const handleAccountId = (e) => {
        const accountId = e.target.value;

        // 계정ID 유효성검사
        const regex = /^[_A-Za-z0-9.]*$/;
        if (regex.test(accountId)) {
            setAccountIdConfirm(true);
            setAccountIdMsg('');
        } else {
            setAccountIdConfirm(false);
            setAccountIdMsg('영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.');
        }
    };

    const handleIntro = (e) => {
        e.target.value;
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
                    onChange={handleUserName}
                />

                <label htmlFor="input_accountId">계정 ID</label>
                <input
                    id="input_accountId"
                    type="text"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    onChange={handleAccountId}
                />

                <label htmlFor="input_intro">소개</label>
                <input
                    id="input_intro"
                    type="text"
                    placeholder="자신과 판매할 작품에 대해 소개해주세요!"
                    onChange={handleIntro}
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
