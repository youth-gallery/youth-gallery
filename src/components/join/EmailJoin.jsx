import React from 'react';
import styles from './EmailJoin.module.css';
import Title from '../login/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import JoinMembership from '../membership/JoinMembership';

function EmailJoin() {
    const [state, setState] = useState(false);
    const [joinId, setJoinId] = useState('');
    const [joinPw, setJoinPw] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [joinEmailConfirm, setJoinEmailConfirm] = useState(false);
    const [joinPwConfirm, setJoinPwConfirm] = useState(false);
    const [emailMsg, setEmailMsg] = useState('');
    const [pwMsg, setPwMsg] = useState('');
    // const navigate = useNavigate();

    const handleJoinId = (e) => {
        const joinId = e.target.value;
        setJoinId(joinId);

        const emailRegex =
            /* eslint-disable-next-line */
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // 이메일 유효성검사 => 경고문구 출력
        if (emailRegex.test(joinId)) {
            setIsEmail(true);
            setEmailMsg('');
        } else if (joinId != '') {
            setIsEmail(false);
            setEmailMsg('*잘못된 이메일 형식입니다.');
        } else {
            setEmailMsg('');
        }

        // // 이메일 미입력시 경고문구
        // if (joinId.length === 0 && joinId == '') {
        //     setEmailMsg('*이메일을 입력해주세요.');
        // } else {
        //     setEmailMsg('');
        // }
    };

    const handleJoinPw = async (e) => {
        const joinPw = e.target.value;
        setJoinPw(joinPw);

        console.log(`joinPw ${joinPw}`);
        console.log(`joinPw.length ${joinPw.length}`);

        // 비밀번호 유효성검사 (6자리 이상일 때만 통과)
        if (!(joinPw.length >= 6)) {
            setJoinPwConfirm(false);
            setPwMsg('*비밀번호는 6자 이상이어야 합니다.');
        } else if (joinPw != '') {
            setJoinPwConfirm(true);
            setPwMsg('');
        } else {
            setPwMsg('');
        }
    };

    // 포커스 잃으면 유효성검사 진행
    const joinConfirm = async (e) => {
        e.preventDefault();

        // 이메일 유효성검사 통과한 경우 => 중복검사 체크함!
        if (isEmail) {
            // 이메일 중복검사 => 미통과시 경고문구 출력!
            try {
                const res = await axios.post(
                    'https://mandarin.api.weniv.co.kr/user/emailvalid/',
                    {
                        user: {
                            email: joinId,
                        },
                    }
                );
                console.log(res);

                if (res.data.message === '사용 가능한 이메일 입니다.') {
                    setJoinEmailConfirm(true);
                    setEmailMsg(`*${res.data.message}`);
                    console.log(`emailMsg ${emailMsg}`);
                } else if (
                    res.data.message === '이미 가입된 이메일 주소 입니다.'
                ) {
                    setJoinEmailConfirm(false);
                    setEmailMsg(`*${res.data.message}`);
                } else {
                    setJoinEmailConfirm(false);
                    setEmailMsg('');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        // 중복검사, 비밀번호 유효성검사 통과 => 다음 버튼 활성화
        setIsActive(joinEmailConfirm && joinPwConfirm);

        console.log(`joinEmailConfirm ${joinEmailConfirm}`);
        console.log(`joinPwConfirm ${joinPwConfirm}`);
        console.log(
            `joinEmailConfirm && joinPwConfirm ${
                joinEmailConfirm && joinPwConfirm
            }`
        );
    }, [joinId, joinPw]);

    const onClickJoin = async () => {
        // 버튼이 활성화되면 => state도 true값으로 바꿔줌 (membership컴포넌트 보이게)
        // 이메일, 비밀번호 유효성검사 통과시 프로필설정 페이지로 이동
        if (joinEmailConfirm && joinPwConfirm) {
            setState(true);
            // navigate('/membership');
        } else {
            setState(false);
        }
        console.log(`state ${state}`);
    };

    // 회원가입 데이터 전송
    // const sendJoin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post(
    //             'https://mandarin.api.weniv.co.kr/user/',
    //             {
    //                 user: {
    //                     email: joinId,
    //                     password: joinPw,
    //                 },
    //             },
    //             {
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //             }
    //         );

    //         // 이메일, 비밀번호 유효성검사 통과시 프로필설정 페이지로 이동
    //         if (joinEmailConfirm && joinPwConfirm) {
    //             navigate('/membership');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // 조건충족 => 다음버튼 클릭 => state값이 true일때
    // 회원가입 안보임 => 프로필설정 보임
    return (
        <>
            {state ? null : (
                <section className={styles.emailJoin_body}>
                    <Title title={'이메일로 회원가입'} />
                    <div
                        className={styles.emailJoin_title}
                        onBlur={joinConfirm}
                    >
                        <label className={styles.join_label} htmlFor="input_id">
                            이메일
                        </label>
                        <input
                            className={styles.join_input}
                            id="input_id"
                            type="email"
                            placeholder="이메일 주소를 입력해주세요."
                            onChange={handleJoinId}
                        />
                        <div className={styles.join_error}>{emailMsg}</div>

                        <label className={styles.join_label} htmlFor="input_pw">
                            비밀번호
                        </label>
                        <input
                            className={styles.join_input}
                            id="input_pw"
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={handleJoinPw}
                        />
                        <div className={styles.pw_error}>{pwMsg}</div>
                    </div>
                    <button
                        className={
                            isActive ? styles.join_btn_active : styles.join_btn
                        }
                        type="submit"
                        onClick={onClickJoin}
                    >
                        <span className={styles.join_span}>다음</span>
                    </button>
                </section>
            )}
            {state ? (
                <JoinMembership joinId={joinId} joinPw={joinPw} />
            ) : (
                <div />
            )}
        </>
    );
}

export default EmailJoin;
