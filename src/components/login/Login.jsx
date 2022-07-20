import React from 'react';
import styles from './Login.module.css';
import LoginInput from '../LoginInput';
import Title from './Title';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <section className={styles.login_body}>
                <Title title={'로그인'} />
                <div className={styles.login_title}>
                    <LoginInput title={'이메일'} type={'email'} />
                    <LoginInput title={'비밀번호'} type={'password'} />
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
