import React from 'react';
import homeImg from '../../assets/icon-home.png';
import newsImg from '../../assets/icon-message-circle.png';
import postImg from '../../assets/icon-edit.png';
import profileImg from '../../assets/icon-user.png';
import homeImgFill from '../../assets/icon-home-fill.png';
import newsImgFill from '../../assets/icon-message-circle-fill.png';
import profileImgFill from '../../assets/icon-user-fill.png';
import { Outlet } from 'react-router-dom';
import * as S from './Styled' 

const menuRendering = (img) => {
    const result = [];
    const imgIcon = [
        { key: 'homeImg', value: homeImg },
        { key: 'newsImg', value: newsImg },
        { key: 'postImg', value: postImg },
        { key: 'profileImg', value: profileImg },
    ];
    const imgIconFill = [homeImgFill, newsImgFill, postImg, profileImgFill];
    const tabTitle = ['홈', '소식', '게시물 작성', '프로필'];
    const link = ['/home', '/news', '/post/upload', `/myprofile`];
    for (let i = 0; i < 4; i++) {
        result.push(
            <S.StyledLink to={link[i]} key={i}>
                <S.Li key={i}>
                    <S.Img
                        src={
                            imgIcon[i].key === img
                                ? imgIconFill[i]
                                : imgIcon[i].value
                        }
                        alt=""
                    />
                    <S.Span>{tabTitle[i]}</S.Span>
                </S.Li>
            </S.StyledLink>
        );
    }
    return result;
};

function TabMenu({ img }) {
    return (
        <>
            <Outlet></Outlet>
            <S.NavStyle className="buttom-nav">
                <S.Ul>{menuRendering(img)}</S.Ul>
            </S.NavStyle>
        </>
    );
}

export default TabMenu;
