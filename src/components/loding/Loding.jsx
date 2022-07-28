import React from 'react';
import { Background, LoadingText } from './Styles';
import Spinner from '../../assets/spinner.gif';

// eslint-disable-next-line react/display-name
export default () => {
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    );
};
