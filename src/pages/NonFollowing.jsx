import React from 'react';
import Nav from '../components/nav/Nav';
import TopMainNav from '../components/nav/TopMainNav';
import TabMenu from '../components/tab/TabMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import fullLogo from '../assets/full-logo.png';

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
    margin-bottom: 20px;
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
function NonFollowing() {
    const navigate = useNavigate();
    return (
        <>
            <Nav>
                <TopMainNav title={'youth-gallery 피드'} />
            </Nav>
            <Section>
                <h1 className="ir">팔로우 하고 있는 사람이 없음</h1>
                <Div>
                    <Img src={fullLogo} />
                    <P>유저를 검색해 팔로우 해보세요!</P>
                    <ButtonDiv>
                        <Button
                            onClick={() => {
                                navigate('/search');
                            }}
                        >
                            검색하기
                        </Button>
                    </ButtonDiv>
                </Div>
            </Section>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default NonFollowing;
