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
    width: 100%;
    border: initial;
    border-bottom: 1px solid var(--btn-gray);
    &:focus {
        outline: none;
        border-bottom: 1px solid var(--logo-yellow);
    }
    margin-bottom: 16px;
`;

function LoginInput({ title, placeholder }) {
    return (
        <>
            <InputBody>
                <Span>{title}</Span>
                <Input placeholder={placeholder}></Input>
            </InputBody>
        </>
    );
}

export default LoginInput;
