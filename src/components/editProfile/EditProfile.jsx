import React, { useState } from 'react';
import styles from '../editProfile/EditProfile.module.css';
import Nav from '../nav/Nav';
import TopUploadNav from '../nav/TopUploadNav';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function EditProfile() {
    const [state, setState] = useState(false);
    const [userName, setUserName] = useState('');
    const [accountId, setAccountId] = useState('');
    const [intro, setIntro] = useState('');
    const [userNameConfirm, setUserNameConfirm] = useState(false);
    const [userNameMsg, setUserNameMsg] = useState('');
    const [accountIdRegexConfirm, setAccountIdRegexConfirm] = useState(false);
    const [accountIdConfirm, setAccountIdConfirm] = useState(false);
    const [accountIdMsg, setAccountIdMsg] = useState('');
    const [file, setFile] = useState('');
    const navigate = useNavigate();
    const inpRef = useRef(null);
    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    const backgroundstyle = {
        backgroundImage: `url('${file}')`,
    };

    // useEffect(() => {
    //     // setState(
    //     //     userName.length > 0 &&
    //     //         accountId.length > 0 &&
    //     //         userNameConfirm &&
    //     //         accountIdConfirm &&
    //     //         file != ''
    //     // );
    // }, []);

    const token = localStorage.getItem('token');
    // 페이지 마운트시 실행 (기존 프로필 정보 불러오기)
    useEffect(() => {
        async function getUserInfo() {
            const url = 'https://mandarin.api.weniv.co.kr';
            try {
                const res = await axios.get(`${url}/user/myinfo`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                });

                console.log(res);
                setUserName(res.data.user.username);
                setAccountId(res.data.user.accountname);
                setIntro(res.data.user.intro);
                setFile(res.data.user.image);
            } catch (error) {
                console.log(error);
            }
        }
        getUserInfo();
    }, []);

    // 이미지 미리보기 기능
    const handlePreview = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    // 이미지 데이터 보내기
    const uploadImage = async () => {
        let formData = new FormData();
        const imgFile = inpRef.current.files;
        const file = imgFile[0];
        formData.append('image', file);
        const res = await axios.post(
            'https://mandarin.api.weniv.co.kr/image/uploadfile',
            formData
        );
        const imgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
        return imgUrl;
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
                const res = await axios.post(
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

    // 사용자이름, 계정ID 채워짐 & 유효성검사 통과시 => 저장 버튼 활성화
    useEffect(() => {
        // setState(
        //     userName.length > 0 &&
        //         accountId.length > 0 &&
        //         userNameConfirm &&
        //         accountIdConfirm
        // );

        if (userName.length > 0 && accountId.length > 0) {
            if (userNameConfirm || accountIdConfirm) {
                if (intro.length > 0) {
                    setState(true);
                } else {
                    setState(false);
                }
                setState(true);
            } else {
                setState(false);
            }
        } else {
            setState(false);
        }
    }, [userName, accountId]);

    // 프로필 수정 데이터 전송
    const sendEditProfile = async (e) => {
        e.preventDefault();

        const img = uploadImage();
        try {
            const res = await axios.put(
                'https://mandarin.api.weniv.co.kr/user',
                {
                    user: {
                        username: userName,
                        accountname: accountId,
                        intro: intro,
                        image: await img,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            console.log(res);

            // 로컬스토리지에 계정ID 바꿔주기
            localStorage.setItem('accountname', accountId);

            // 버튼 활성화시 (사용자이름, 계정ID, 소개 조건 모두 통과시)
            if (state) {
                navigate('/myprofile');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={sendEditProfile}>
            <Nav>
                <TopUploadNav title={'저장'} state={state} />
            </Nav>
            <section className={styles.editProfile_body}>
                <div className={styles.editProfile_uploadContainer}>
                    <div className={styles.preview} style={backgroundstyle} />

                    <label
                        htmlFor="input_file"
                        className={styles.editProfile_fileImg}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        id="input_file"
                        style={{ display: 'none' }}
                        onChange={handlePreview}
                        ref={inpRef}
                        onClick={onPicBtnClick}
                    />
                </div>

                <label className={styles.edit_label} htmlFor="input_userName">
                    사용자 이름
                </label>
                <input
                    className={styles.edit_input}
                    id="input_userName"
                    value={userName}
                    type="text"
                    placeholder="2~10자 이내여야 합니다."
                    onChange={handleUserName}
                />
                <div className={styles.edit_error}>{userNameMsg}</div>

                <label className={styles.edit_label} htmlFor="input_accountId">
                    계정 ID
                </label>
                <input
                    className={styles.edit_input}
                    id="input_accountId"
                    type="text"
                    value={accountId}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    onChange={handleAccountId}
                    onBlur={checkAccountId}
                />
                <div
                    className={
                        accountIdConfirm
                            ? styles.edit_success
                            : styles.edit_error
                    }
                >
                    {accountIdMsg}
                </div>

                <label className={styles.edit_label} htmlFor="input_intro">
                    소개
                </label>
                <input
                    className={styles.edit_input}
                    id="input_intro"
                    type="text"
                    value={intro}
                    placeholder="자신과 판매할 작품에 대해 소개해주세요!"
                    onChange={handleIntro}
                />
            </section>
        </form>
    );
}

export default EditProfile;
