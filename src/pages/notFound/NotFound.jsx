import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon404 from '../../assets/icon-404.png';
import * as S from './Styled';


function NotFound() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <>
            <S.Section>
                <h1 className="ir">404 페이지 에러</h1>
                <S.Div>
                    <S.Img src={icon404} />
                    <S.P>페이지를 찾을 수 없습니다. :(</S.P>
                    <S.ButtonDiv>
                        <S.Button onClick={handleGoBack}>이전 페이지</S.Button>
                    </S.ButtonDiv>
                </S.Div>
            </S.Section>
        </>
    );
}

export default NotFound;
