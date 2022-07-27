/*  */
import React from 'react';
import styles from './Login.module.css';
import Title from './Title';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [loginConfirm, setLoginConfirm] = useState(false);
    const [loginMsg, setLoginMsg] = useState('');
    const navigate = useNavigate();
    console.log(isEmail);

    const handleLoginId = (e) => {
        setLoginId(e.target.value);

        // 로그인 이메일 유효성검사 로직
        const emailRegex =
            /* eslint-disable-next-line */
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // 이메일 유효성검사
        emailRegex.test(loginId) ? setIsEmail(true) : setIsEmail(false);
    };

    // 아름님 코드
    //       const handleEmail = useCallback((event) => {
    //     const emailRegex =
    //       /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    //     const currentEmail = event.target.value;
    //     setEmail(currentEmail);

    //     if (!emailRegex.test(currentEmail)) {
    //       setEmailMsg("올바른 이메일 형식이 아닙니다");
    //       setIsEmail(false);
    //     } else {
    //       setIsEmail(true);
    //       setEmailMsg("");
    //     }
    //   }, []);

    const handleLoginPw = (e) => {
        setLoginPw(e.target.value);
    };

    // 로그인 버튼 클릭시
    // 1. 이메일 유효성검사
    // 2. API 서버에 post요청으로 데이터 요청
    // 3. 이메일과 비밀번호 일치 여부 검사 => 불일치시 경고 문구 출력!
    const onClickLogin = async () => {
        // // 로그인 이메일 유효성검사 로직
        // const emailRegex =
        //     /* eslint-disable-next-line */
        //     /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // // 이메일 유효성검사
        // emailRegex.test(loginId) ? setIsEmail(true) : setIsEmail(false);

        try {
            const res = await axios.post(
                'https://mandarin.api.weniv.co.kr/user/login/',
                {
                    user: {
                        email: loginId,
                        password: loginPw,
                    },
                }
            );
            console.log(res);

            // 로그인 성공시 로컬스토리지에 토큰, 유저네임 저장
            if (res.data.user?.token) {
                localStorage.setItem('token', res.data.user.token);
                localStorage.setItem(
                    'refresh-token',
                    res.data.user.refreshToken
                );
                localStorage.setItem('accountname', res.data.user.accountname);

                setLoginConfirm(true);
                setLoginMsg(''); // 경고문구 지워주기
                navigate('/'); // 로그인 성공시 홈 피드로 이동시켜주기
            } else {
                // 로그인 실패시
                setLoginConfirm(false); // loginConfirm을 false로 바꿔줌 (경고문구 보여줄 div태그 보여줌 유무)
                setLoginMsg(`*${res.data.message}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // 이메일, 비밀번호 입력값이 있으면 로그인 버튼 활성화
        loginId && loginPw ? setIsActive(true) : setIsActive(false);

        // 이메일, 비밀번호 input박스가 둘 중에 하나라도 비었을 때는 loginConfirm경고문구 지워주기
        !loginId || !loginPw ? setLoginConfirm(true) : null;

        // TODO! mount시 1회만 (첫 로딩시) 이메일-비밀번호 필수입력 문구 가려주기
        return () => {
            // setIsActive(false);
            // setLoginConfirm(true);
        };
    }, [loginId, loginPw]);

    return (
        <>
            <section className={styles.login_body}>
                <Title title={'로그인'} />
                <div className={styles.login_title}>
                    <label htmlFor="input_id">이메일</label>
                    <input
                        className={styles.login_input_id}
                        value={loginId}
                        id="input_id"
                        type="email"
                        onChange={handleLoginId}
                    />
                    {loginId ? (
                        <div />
                    ) : (
                        <div className={styles.email_error}>
                            *이메일을 입력해주세요.
                        </div>
                    )}

                    <label className={styles.input_label_pw} htmlFor="input_pw">
                        비밀번호
                    </label>
                    <input
                        className={styles.login_input_pw}
                        value={loginPw}
                        id="input_pw"
                        type="password"
                        onChange={handleLoginPw}
                    />
                    {loginConfirm ? (
                        <div />
                    ) : (
                        <div className={styles.login_error}>{loginMsg}</div>
                    )}
                    {loginPw ? (
                        <div />
                    ) : (
                        <div className={styles.pw_error}>
                            *비밀번호를 입력해주세요.
                        </div>
                    )}
                </div>
                <button
                    className={
                        isActive ? styles.login_btn_active : styles.login_btn
                    }
                    onClick={onClickLogin}
                >
                    <span className={styles.login_span}>로그인</span>
                </button>
                <span className={styles.email_join}>
                    <Link className={styles.email_join_link} to={'/join'}>
                        이메일로 회원가입
                    </Link>
                </span>
            </section>
        </>
    );
}

export default Login;
