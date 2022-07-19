import React, { useState } from 'react';
import styled from 'styled-components';
import moreIcon from '../assets/s-icon-more-vertical.png';
import heartIcon from '../assets/icon-heart.png';
import heartIconFill from '../assets/icon-heartFill.png';
import messageIcon from '../assets/icon-message-circle-1.png';
import axios from 'axios';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePostDiv = styled.div`
    display: flex;
    width: 358px;
    margin-bottom: 25px;
`;

const HomePostProfile = styled.img`
    width: 42px;
    height: 42px;
    padding-right: 12px;
    border-radius: 50%;
`;

const FlexDiv = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const FlexDivInner = styled.div`
    display: flex;
    flex-direction: column;
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
    width: 304px;
`;

const ImgDiv = styled.div`
    width: 304px;
    height: 230px;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
`;

const HomePostImgLists = styled.ul`
    display: flex;
    transform: translate(${(props) => `-${(props.imgIndex - 1) * 304}px`}, 0px);
    transition: 0.6s;
`;

const ImgLi = styled.li`
    width: 304px;
    height: 230px;
    /* object-fit: cover; */
    border-radius: 10px;
`;

const HomePostImg = styled.img`
    width: 304px;
    height: 230px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const ArrowBtn = styled.button`
    background-color: white;
    color: none;
    opacity: 30%;
    position: absolute;
    top: 48%;
    line-height: 150%;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin: 0 5px;
`;
const ArrowLeft = styled(ArrowBtn)`
    left: 0;
`;
const ArrowRight = styled(ArrowBtn)`
    right: 0;
`;

const PostBtn = styled.button`
    width: 45px;
    height: 20px;
    padding-left: 10px;
`;

const HeartBtn = styled(PostBtn)`
    background: url(${(props) => props.img || heartIcon}) no-repeat left / 18px
        18px;
    border: none;
    cursor: pointer;
    color: #767676;
`;

const CommentBtn = styled(PostBtn)`
    background: url(${messageIcon}) no-repeat left / 18px 18px;
    border: none;
    cursor: pointer;
    color: #767676;
`;

const HomePostDate = styled.span`
    display: block;
    margin-top: 12px;
    margin-bottom: 4px;
    color: #767676;
    font-size: 10px;
    line-height: 1.2;
`;

const HomePost = ({ datas }) => {
    const [state, setState] = useState(datas.hearted);
    const [count, setCount] = useState(datas.heartCount);
    const [index, setIndex] = useState(1);

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
                    setState(response.data.post.hearted);
                    setCount(response.data.post.heartCount);
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

    const leftClick = () => {
        if (index > 1) {
            setIndex(index - 1);
            console.log(index);
            console.log(datas.image.split(',').length);
        }
    };
    const rightClick = () => {
        if (index < datas.image.split(',').length) {
            setIndex(index + 1);
            console.log(index);
            console.log(datas.image.split(',').length);
        }
    };
    const postDate = new Date(datas.updatedAt);
    return (
        <>
            <HomePostDiv>
                <HomePostProfile src={datas.author.image} />
                <div>
                    <div>
                        <FlexDiv>
                            <FlexDivInner>
                                <HomePostName>
                                    {datas.author.username}
                                </HomePostName>
                                <HomePostId>{datas.author.intro}</HomePostId>
                            </FlexDivInner>
                            <MoreIcon />
                        </FlexDiv>
                    </div>

                    <HomePostTxt>{datas.content}</HomePostTxt>
                    {datas.image && (
                        <ImgDiv>
                            <HomePostImgLists imgIndex={index}>
                                {datas.image.split(',').map((img, i) => (
                                    <ImgLi key={i}>
                                        <HomePostImg
                                            src={img}
                                            alt="포스트 이미지"
                                        />
                                    </ImgLi>
                                ))}
                            </HomePostImgLists>
                            {datas.image.split(',').length !== 1 && (
                                <>
                                    {index !== 1 && (
                                        <ArrowLeft onClick={leftClick}>
                                            <FontAwesomeIcon
                                                icon={faAngleLeft}
                                            />
                                        </ArrowLeft>
                                    )}
                                    {index !==
                                        datas.image.split(',').length && (
                                        <ArrowRight onClick={rightClick}>
                                            <FontAwesomeIcon
                                                icon={faAngleRight}
                                            />
                                        </ArrowRight>
                                    )}
                                </>
                            )}
                        </ImgDiv>
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
                    <HomePostDate>
                        {`${postDate.getFullYear()}년 ${
                            postDate.getMonth() + 1
                        }월 ${postDate.getDate()}일`}
                    </HomePostDate>
                </div>
            </HomePostDiv>
        </>
    );
};

export default HomePost;
