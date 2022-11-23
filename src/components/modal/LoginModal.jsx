import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginModal() {
    return (
        <>
            <Li >
                <Link to="/login">
                    <LoginButton>
                        이메일로 로그인
                    </LoginButton>
                </Link>
            </Li>
            <Li>
                <Span>
                    <LinkStyle to="/join">
                        회원가입
                    </LinkStyle>
                </Span>
            </Li>
        </>
    );
}

const Li = styled.li`
    padding: 14px 34px 14px 34px;
    font-size: 1.4rem;
    font-weight: bold;
`;

const LoginButton = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid var(--gray-color);
    border-radius: 44px;
    padding: 13px 0;
    color: white;
    background-color: var(--logo-black);
    font-size: 1.4rem;
    text-align: center;
`;

const Span = styled.span`
    display: block;
    margin: 20px auto 82px;
    font-size: 1.2rem;
    text-align: center;
    color: var(--gray-color);
`;

const LinkStyle = styled(Link)`
    color: var(--gray-color);
`;

export default LoginModal;
