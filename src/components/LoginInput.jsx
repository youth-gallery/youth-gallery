import React from 'react';
import styled from 'styled-components';

const InputBody = styled.section`
    background-color: #ffffff;
`;

const Span = styled.span`
    display: block;
    color: var(--gray-color);
    font-size: 1.2rem;
`;

const Input = styled.input`
    color: var(--logo-black);
    font-size: 1.4rem;
    padding: 25px 184px 9px 0;
    width: 100%;
    border: initial;
    border-bottom: 1px solid var(--btn-gray);
    &:focus {
        outline: none;
        border-bottom: 1px solid var(--logo-yellow);
    }
`;

function LoginInput({ title }) {
    return (
        <>
            <InputBody>
                <Span>{title}</Span>
                <Input placeholder="paul-lab@naver.com"></Input>
            </InputBody>
        </>
    );
}

export default LoginInput;
