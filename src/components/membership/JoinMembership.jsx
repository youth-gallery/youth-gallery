import React, { useState } from 'react';
import styles from './JoinMembership.module.css';
import Title from '../login/Title';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinMembership() {
    const [userName, setUserName] = useState('');
    const [accountId, setAccountId] = useState('');
    const [intro, setIntro] = useState('');
    const [userNameConfirm, setUserNameConfirm] = useState(false);
    const [userNameMsg, setUserNameMsg] = useState('');
    const [accountIdRegexConfirm, setAccountIdRegexConfirm] = useState(false);
    const [accountIdConfirm, setAccountIdConfirm] = useState(false);
    const [accountIdMsg, setAccountIdMsg] = useState('');
    const [file, setFile] = useState('');
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    console.log(file);
    const backgroundstyle = {
        backgroundImage: `url('${file}')`,
    };

    const handleUserName = (e) => {
        const userName = e.target.value;
        setUserName(userName);

        // 사용자이름 유효성검사 (2~10자 이내만 통과)
        if (userName.length >= 2 && userName.length <= 10) {
            setUserNameConfirm(true);
            setUserNameMsg('');
        } else {
            setUserNameConfirm(false);
            setUserNameMsg('*2~10자 이내여야 합니다.');
            if (userName === '') {
                setUserNameConfirm(false);
                setUserNameMsg('');
            }
        }
    };

    const handleAccountId = (e) => {
        const accountId = e.target.value;
        setAccountId(accountId);

        // 계정ID 유효성검사
        const regex = /^[_A-Za-z0-9.]*$/;
        if (regex.test(accountId)) {
            setAccountIdRegexConfirm(true);
            setAccountIdMsg('');
        } else {
            setAccountIdRegexConfirm(false);
            setAccountIdMsg('*영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.');
        }
    };

    // 포커스 잃으면 계정ID 중복검사
    const checkAccountId = async () => {
        // 계정ID 유효성검사 통과한 경우 => 중복검사 체크함!
        if (accountIdRegexConfirm) {
            try {
                let res = await axios.post(
                    'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
                    {
                        user: {
                            accountname: accountId,
                        },
                    }
                );

                if (res.data.message === '사용 가능한 계정ID 입니다.') {
                    setAccountIdConfirm(true);
                    setAccountIdMsg(`*${res.data.message}`);
                    console.log(accountIdConfirm);
                } else if (res.data.message === '이미 가입된 계정ID 입니다.') {
                    setAccountIdConfirm(false);
                    setAccountIdMsg(`*${res.data.message}`);
                } else {
                    setAccountIdConfirm(false);
                }

                // res = await
            } catch (error) {
                console.log(error);
            }
        } else {
            return;
        }
    };

    // 소개
    const handleIntro = (e) => {
        const intro = e.target.value;
        setIntro(intro);
    };

    // 사용자이름, 계정ID 채워짐 & 유효성검사 통과시 => 시작하기 버튼 활성화
    useEffect(() => {
        // console.log(`userName.length > 0 ${userName.length > 0}`);
        // console.log(`accountId.length > 0 ${accountId.length > 0}`);
        // console.log(`userNameConfirm ${userNameConfirm}`);
        // console.log(`accountIdConfirm ${accountIdConfirm}`);
        setIsActive(
            userName.length > 0 &&
                accountId.length > 0 &&
                userNameConfirm &&
                accountIdConfirm &&
                intro.length > 0
        );
    }, [userName, accountId, intro]);

    // 유스갤러리 시작하기 버튼 클릭시 myprofile로 이동
    const onClickMembership = () => {
        // 버튼 활성화시 (사용자이름, 계정ID, 소개 조건 모두 통과시)
        if (isActive) {
            navigate('/myprofile');
        }
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

                <label
                    className={styles.membership_label}
                    htmlFor="input_userName"
                >
                    사용자 이름
                </label>
                <input
                    className={styles.membership_input}
                    id="input_userName"
                    type="text"
                    placeholder="2~10자 이내여야 합니다."
                    onChange={handleUserName}
                />
                <div className={styles.membership_error}>{userNameMsg}</div>

                <label
                    className={styles.membership_label}
                    htmlFor="input_accountId"
                >
                    계정 ID
                </label>
                <input
                    className={styles.membership_input}
                    id="input_accountId"
                    type="text"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    onChange={handleAccountId}
                    onBlur={checkAccountId}
                />
                <div className={styles.membership_error}>{accountIdMsg}</div>

                <label
                    className={styles.membership_label}
                    htmlFor="input_intro"
                >
                    소개
                </label>
                <input
                    className={styles.membership_input}
                    id="input_intro"
                    type="text"
                    placeholder="자신과 판매할 작품에 대해 소개해주세요!"
                    onChange={handleIntro}
                />
                <button
                    className={
                        isActive
                            ? styles.membership_btn_active
                            : styles.membership_btn
                    }
                    onClick={onClickMembership}
                >
                    {/* className={styles.joinMembership_btn}> */}
                    <span className={styles.joinMembership_btnSpan}>
                        유스갤러리 시작하기
                    </span>
                </button>
            </section>
        </>
    );
}

export default JoinMembership;
