import React from 'react';
import styled from 'styled-components';
import homeImg from '../../assets/icon-home.png';
import newsImg from '../../assets/icon-message-circle.png';
import postImg from '../../assets/icon-edit.png';
import profileImg from '../../assets/icon-user.png';

function TabNav() {
    return (
        <>
            <NavStyle className="buttom-nav">
                <ul>
                    <li>
                        <img src={homeImg} alt="" />
                        <span>홈</span>
                    </li>
                    <li>
                        <img src={newsImg} alt="" />
                        <span>소식</span>
                    </li>
                    <li>
                        <img src={postImg} alt="" />
                        <span>게시물 작성</span>
                    </li>
                    <li>
                        <img src={profileImg} alt="" />
                        <span>프로필</span>
                    </li>
                </ul>
            </NavStyle>
        </>
    );
}

export default TabNav;

const NavStyle = styled.section`
    //reset
    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0 auto;
    }
    //
    padding: 12px 6px 6px 6px;
    ul {
        display: flex;
        justify-content: space-between;
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60px;
    }
    img {
        width: 24px;
        height: 24px;
    }
    span {
        font-size: 10px;
        color: #767676;
    }
`;
