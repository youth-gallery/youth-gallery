import React from 'react';
import styles from './EmailJoin.module.css';
import Title from '../login/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function EmailJoin() {
    const [joinId, setJoinId] = useState('');
    const [joinPw, setJoinPw] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [joinEmailConfirm, setJoinEmailConfirm] = useState(false);
    const [joinPwConfirm, setJoinPwConfirm] = useState(false);
    const [msg, setMsg] = useState('');

    const handleJoinId = (e) => {
        setJoinId(e.target.value);
    };

    const handleJoinPw = (e) => {
        setJoinPw(e.target.value);

        console.log(`joinPw ${joinPw}`);
        console.log(`joinPw.length ${joinPw.length}`);

        // 비밀번호 유효성검사 (6자리 이상일 때만 통과) // TODO: 처음 쳤을 때 바로 1로 반영 안되는 이슈! 해결하기!!
        joinPw.length >= 5 ? setJoinPwConfirm(true) : setJoinPwConfirm(false);
    };

    // 포커스 잃으면 유효성검사 진행 => TODO: 첫로딩시 경고문구 지워주기!
    const joinConfirm = async () => {
        // 이메일 주소 유효성검사
        const emailRegex =
            /* eslint-disable-next-line */
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        emailRegex.test(joinId) ? setIsEmail(true) : setIsEmail(false);

        // // 비밀번호 유효성검사 (6자리 이상일 때만 통과)
        // joinPw.length >= 6 ? setJoinPwConfirm(true) : setJoinPwConfirm(false);

        console.log(`isEmail ${isEmail}`);
        console.log(`joinPwConfirm ${joinPwConfirm}`);
        console.log(
            `isEmail && joinEmailConfirm && joinPwConfirm ${
                isEmail && joinEmailConfirm && joinPwConfirm
            }`
        );

        // 다음 버튼 클릭시
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
                setMsg(`*${res.data.message}`);
            } else if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
                setJoinEmailConfirm(false);
                setMsg(`*${res.data.message}`);
            } else {
                setJoinEmailConfirm(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // // 다음 버튼 클릭시
    // // 이메일 중복검사 => 미통과시 경고문구 출력!
    // const onClickJoin = async () => {
    //     try {
    //         const res = await axios.post(
    //             'https://mandarin.api.weniv.co.kr/user/emailvalid/',
    //             {
    //                 user: {
    //                     email: joinId,
    //                 },
    //             }
    //         );
    //         console.log(res);

    //         if (res.data.message === '사용 가능한 이메일 입니다.') {
    //             setJoinEmailConfirm(true);
    //             setMsg(`*${res.data.message}`);
    //         } else if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
    //             setJoinEmailConfirm(false);
    //             setMsg(`*${res.data.message}`);
    //         } else {
    //             setJoinEmailConfirm(false);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        // 이메일 유효성검사, 중복검사, 비밀번호 유효성검사 모두 통과 => 다음 버튼 활성화
        console.log(`isEmail ${isEmail}`);
        console.log(`joinEmailConfirm ${joinEmailConfirm}`);
        console.log(`joinPwConfirm ${joinPwConfirm}`);
        console.log(
            `isEmail && joinEmailConfirm && joinPwConfirm ${
                isEmail && joinEmailConfirm && joinPwConfirm
            }`
        );
        setIsActive(isEmail && joinEmailConfirm && joinPwConfirm);

        return () => {};
    }, [joinId, joinPw]);

    return (
        <>
            <section className={styles.emailJoin_body}>
                <Title title={'이메일로 회원가입'} />
                <div className={styles.emailJoin_title} onBlur={joinConfirm}>
                    <label htmlFor="input_id">이메일</label>
                    <input
                        className={styles.join_input_email}
                        id="input_id"
                        type="email"
                        placeholder="이메일 주소를 입력해주세요."
                        onChange={handleJoinId}
                    />
                    {isEmail ? (
                        <div />
                    ) : (
                        <div className={styles.join_error}>
                            *잘못된 이메일 형식입니다.
                        </div>
                    )}

                    {joinEmailConfirm ? (
                        <div className={styles.join_error}>{msg}</div>
                    ) : (
                        <div />
                    )}

                    <label htmlFor="input_pw">비밀번호</label>
                    <input
                        className={styles.join_input_pw}
                        id="input_pw"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={handleJoinPw}
                    />
                    {joinPwConfirm ? (
                        <div />
                    ) : (
                        <div className={styles.pw_error}>
                            *비밀번호는 6자 이상이어야 합니다.
                        </div>
                    )}
                </div>
                <button
                    className={
                        isActive ? styles.join_btn_active : styles.join_btn
                    }
                    // onClick={onClickJoin}
                >
                    <span className={styles.join_span}>다음</span>
                </button>
            </section>
        </>
    );
}

export default EmailJoin;
