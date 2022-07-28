import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageNotFound from '../../assets/ImageNotFound.png'

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

function PostImg({ image }) {
    const [index, setIndex] = useState(1);
    const leftClick = () => {
        if (index > 1) {
            setIndex(index - 1);
            console.log(index);
            console.log(image.split(',').length);
        }
    };
    const rightClick = () => {
        if (index < image.split(',').length) {
            setIndex(index + 1);
            console.log(index);
            console.log(image.split(',').length);
        }
    };
    const handleImgError = (e) => {
        e.target.src = ImageNotFound;
    };
    return (
        <>
            {image && (
                <ImgDiv>
                    <HomePostImgLists imgIndex={index}>
                        {image.split(',').map((img, i) => (
                            <ImgLi key={i}>
                                <HomePostImg
                                    src={img}
                                    alt="포스트 이미지"
                                    onError={handleImgError}
                                />
                            </ImgLi>
                        ))}
                    </HomePostImgLists>
                    {image.split(',').length !== 1 && (
                        <>
                            {index !== 1 && (
                                <ArrowLeft onClick={leftClick}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </ArrowLeft>
                            )}
                            {index !== image.split(',').length && (
                                <ArrowRight onClick={rightClick}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </ArrowRight>
                            )}
                        </>
                    )}
                </ImgDiv>
            )}
        </>
    );
}

export default PostImg;
