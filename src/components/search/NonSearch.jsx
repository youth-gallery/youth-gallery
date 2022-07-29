import React from 'react';
import styled from 'styled-components';
import brush from '../../assets/brush.png';

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
    width: 80px;
    background-size: cover;
    margin: auto auto 30px;
`;
const P = styled.p`
    margin-bottom: 20px;
    font-size: 1.4rem;
`;

function NonSearch() {
    return (
        <Section>
            <h1 className="ir">검색할 계정이 없음</h1>
            <Div>
                <Img src={brush} />
                <P>검색할 수 있는 계정이 없습니다.</P>
            </Div>
        </Section>
    );
}

export default NonSearch;
