import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icon404 from '../assets/icon-404.png';

const Section = styled.section`
    height: 100vh;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%); ;
`;

const Img = styled.img`
    width: 160px;
    height: 160px;
    background-size: cover;
    margin: auto;
`;
const P = styled.p`
    margin: 20px 0;
    font-size: 1.4rem;
`;

const ButtonDiv = styled.div`
    width: 120px;
    height: 44px;
    margin: auto;
`;

const Button = styled.button`
    background-color: var(--logo-black);
    border: initial;
    width: 100%;
    padding: 13px 0;
    border-radius: 32px;
    cursor: pointer;
    color: white;
`;

function NotFound() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Section>
                <h1 className="ir">404 페이지 에러</h1>
                <Div>
                    <Img src={icon404} />
                    <P>페이지를 찾을 수 없습니다. :(</P>
                    <ButtonDiv>
                        <Button onClick={handleGoBack}>이전 페이지</Button>
                    </ButtonDiv>
                </Div>
            </Section>
        </>
    );
}

export default NotFound;
