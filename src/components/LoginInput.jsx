import React from 'react';
import styled from 'styled-components';

const InputBody = styled.section`
    background-color: #ffffff;
`;

const Label = styled.label`
    display: block;
    color: var(--gray-color);
    font-size: 1.2rem;
`;

const Input = styled.input`
    min-height: 32px;
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
    ::placeholder {
        font-size: 1.4rem;
        color: var(--btn-gray);
    }
`;

function LoginInput({ title, placeholder, type }) {
    return (
        <>
            <InputBody>
                <Label htmlFor="input_box">{title}</Label>
                <Input
                    placeholder={placeholder}
                    type={type}
                    id="input_box"
                ></Input>
            </InputBody>
        </>
    );
}

export default LoginInput;
