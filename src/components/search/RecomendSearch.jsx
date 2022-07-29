import React from 'react';
import styled from 'styled-components';
import palette from '../../assets/palette.png';

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

function RecommendSearch() {
    return (
        <Section>
            <Div>
                <Img src={palette} />
                <P>더 많은 작가를 검색해보세요 :)</P>
            </Div>
        </Section>
    );
}

export default RecommendSearch;
