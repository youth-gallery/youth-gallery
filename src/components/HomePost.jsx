import React, { useState } from 'react';
import styled from 'styled-components';
import moreIcon from '../assets/s-icon-more-vertical.png';
import heartIcon from '../assets/icon-heart.png';
import heartIconFill from '../assets/icon-heartFill.png';
import messageIcon from '../assets/icon-message-circle-1.png';
import axios from 'axios';

const HomePostDiv = styled.div`
    display: flex;
    width: 358px;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    padding-right: 12px;
    border-radius: 50%;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HomePostName = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    padding: 4px 80px 0 0;
`;

const HomePostId = styled.span`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    color: #767676;
    padding: 0 180px 16px 0;
`;

const MoreIcon = styled.button`
    width: 20px;
    height: 20px;
    margin-top: 4px;
    background: url(${moreIcon}) no-repeat center / 18px 18px;
    border: none;
    cursor: pointer;
`;

const HomePostTxt = styled.p`
    font-size: 14px;
    line-height: 1.4;
`;

const HomePostImgList = styled.div`
    display: flex;
    width: 304px;
    height: 230px;
    overflow-x: scroll;
    scrollbar-width: none;
`;

const HomePostImg = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const HeartBtn = styled.button`
    width: 45px;
    height: 20px;
    background: url(${(props) => props.img || heartIcon}) no-repeat left / 18px
        18px;
    text-align: right;
    border: none;
    cursor: pointer;
    color: #767676;
`;

const CommentBtn = styled.button`
    width: 45px;
    height: 20px;
    margin: 7px 206px 15px 8px;
    background: url(${messageIcon}) no-repeat left / 18px 18px;
    text-align: right;
    border: none;
    cursor: pointer;
    color: #767676;
`;

const HomePostDate = styled.span`
    display: block;
    margin-bottom: 4px;
    color: #767676;
    font-size: 10px;
    line-height: 1.2;
`;

const HomePost = ({ datas }) => {
  const [state, setState] = useState(datas.hearted);
  const [count, setCount] = useState(datas.heartCount);

    const url = 'https://mandarin.api.weniv.co.kr';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE2MjM5ODJmZGNjNzEyZjQzMzk4YiIsImV4cCI6MTY2MjcwMTIyMiwiaWF0IjoxNjU3NTE3MjIyfQ.A75fUeLUj8TKdD1LVGGph-M1-coF8pr_oq8BY6R-k4k';

    async function useAxios(url = '', method = '') {
        try {
          axios(url, {
            method: method,
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          })
            .then((response) => {
              setState(response.data.post.hearted)
              setCount(response.data.post.heartCount)
            })
                .then(console.log(state))
                .then(console.log(count));
        } catch (error) {
            console.log(error);
        }
    }
    const onClick = () => {
        state
            ? useAxios(url + `/post/${datas.id}/unheart`, 'DELETE')
            : useAxios(url + `/post/${datas.id}/heart`, 'POST');
    };
    console.log(state);

    return (
        <>
            <HomePostDiv>
                <div>
                    <HomePostProfile src={datas.author.image} />
                </div>
                <div>
                    <FlexDiv>
                        {/* 클릭시 해당 사용자 피드 목록으로 이동하도록 후에 처리 */}
                        <div>
                            <HomePostName>{datas.author.username}</HomePostName>
                            <HomePostId>@이메일나중에등록</HomePostId>
                        </div>
                        <MoreIcon />
                    </FlexDiv>
                    <HomePostTxt>{datas.content}</HomePostTxt>
                    {/* ul,li, img 형태로 변경 */}
                    {datas.image && (
                        <HomePostImgList>
                            {datas.image.split(',').map((img, i) => (
                                <HomePostImg
                                    src={img}
                                    alt="포스트 이미지"
                                    key={i}
                                />
                            ))}
                        </HomePostImgList>
                    )}
                    {/* 좋아요 버튼 */}
                    <div>
                        {state ? (
                            <HeartBtn img={heartIconFill} onClick={onClick}>
                                {count}
                            </HeartBtn>
                        ) : (
                            <HeartBtn img={heartIcon} onClick={onClick}>
                                {count}
                            </HeartBtn>
                        )}
                        <CommentBtn>{datas.commentCount}</CommentBtn>
                    </div>
                    <HomePostDate>{datas.createdAt.slice(0, 10)}</HomePostDate>
                </div>
            </HomePostDiv>
        </>
    );
};

export default HomePost;
