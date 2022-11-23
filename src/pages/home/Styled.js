import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    position: relative;
`;

export const PaddingDiv = styled.div`
    padding: 55px 0;
`;

export const View = styled.div`
    width: 440px;
    height: 90vh;
    position: absolute;
    overflow: hidden;
    left: 0;
`;

export const ScrollBlind = styled.div`
    width: 480px;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
`;
