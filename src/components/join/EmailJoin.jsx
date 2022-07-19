import React from 'react';
import styles from './EmailJoin.module.css';
import LoginInput from '../LoginInput';
import Title from '../login/Title';
import NextDisalbedButton from '../../components/button/NextDisabledButton';

function EmailJoin() {
    return (
        <>
            <section className={styles.emailJoin_body}>
                <Title title={'이메일로 회원가입'} />
                <div className={styles.emailJoin_title}>
                    <LoginInput
                        title={'이메일'}
                        placeholder={'이메일 주소를 입력해주세요.'}
                        type={'email'}
                    />
                    <LoginInput
                        title={'비밀번호'}
                        placeholder={'비밀번호를 입력해주세요.'}
                        type={'password'}
                    />
                </div>
                <NextDisalbedButton />
            </section>
        </>
    );
}

export default EmailJoin;
