import styled from 'styled-components';


export const Section = styled.section`
    height: 100vh;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%); ;
`;

export const Img = styled.img`
    width: 160px;
    height: 160px;
    background-size: cover;
    margin: auto;
`;
export const P = styled.p`
    margin: 20px 0;
    font-size: 1.4rem;
`;

export const ButtonDiv = styled.div`
    width: 120px;
    height: 44px;
    margin: auto;
`;

export const Button = styled.button`
    background-color: var(--logo-black);
    border: initial;
    width: 100%;
    padding: 13px 0;
    border-radius: 32px;
    cursor: pointer;
    color: white;
`;
