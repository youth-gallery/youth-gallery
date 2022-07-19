import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginModal.module.css';

function LoginModal() {
    return (
        <>
            <li className={styles.list}>
                <Link to="/login">
                    <button className={styles.login_btn}>
                        이메일로 로그인
                    </button>
                </Link>
            </li>
            <li className={styles.list}>
                <span className={styles.span}>
                    <Link className={styles.link} to="/join">
                        회원가입
                    </Link>
                </span>
            </li>
        </>
    );
}

export default LoginModal;
