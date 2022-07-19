import React from 'react';
// import styles from './Splash.module.css';
import LoginInput from '../LoginInput';
import Title from './Title';

function Login() {
    return (
        <>
            <Title title={'이메일로 회원가입'} />
            <LoginInput
                title={'이메일'}
                placeholder={'이메일 주소를 입력해주세요.'}
            />
            <LoginInput
                title={'비밀번호'}
                placeholder={'비밀번호를 입력해주세요.'}
            />
        </>
    );
}

export default Login;
