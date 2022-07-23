import React from 'react';
import styles from './EmailJoin.module.css';
import Title from '../login/Title';
import NextDisalbedButton from '../../components/button/NextDisabledButton';

function EmailJoin() {
    return (
        <>
            <section className={styles.emailJoin_body}>
                <Title title={'이메일로 회원가입'} />
                <div className={styles.emailJoin_title}>
                    <label htmlFor="input_id">이메일</label>
                    <input
                        id="input_id"
                        type="email"
                        placeholder="이메일 주소를 입력해주세요."
                        onChange={(e) => {
                            e.target.value;
                        }}
                    />
                    <label htmlFor="input_pw">비밀번호</label>
                    <input
                        id="input_pw"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={(e) => {
                            e.target.value;
                        }}
                    />
                </div>
                <NextDisalbedButton />
            </section>
        </>
    );
}

export default EmailJoin;
