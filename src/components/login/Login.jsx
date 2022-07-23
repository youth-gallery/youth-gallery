import React from 'react';
import styles from './Login.module.css';
// import LoginInput from '../LoginInput';
import Title from './Title';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

function Login() {
    // const [loginId, setLoginId] = useState('');
    // const [loginPw, setLoginPw] = useState('');

    return (
        <>
            <section className={styles.login_body}>
                <Title title={'로그인'} />
                <div className={styles.login_title}>
                    <label htmlFor="input_id">이메일</label>
                    <input
                        id="input_id"
                        type="email"
                        onChange={(e) => {
                            e.target.value;
                        }}
                    />
                    <label htmlFor="input_pw">비밀번호</label>
                    <input
                        id="input_pw"
                        type="password"
                        onChange={(e) => {
                            e.target.value;
                        }}
                    />
                </div>
                <button className={styles.login_btn}>
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
