import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PostModal({ values, propFunc, post_id, link }) {
    const navigate = useNavigate();

    const setButton = (value, navigate, propFunc) => {
        switch (value) {
            case '설정 및 개인정보':
                //설정 및 개인정보 페이지 이동
                break;
            case '로그아웃':
                //로그아웃 모달 열기
                propFunc(true);
                break;
            case '삭제':
                //삭제 모달 띄우기
                propFunc(true);
                break;
            case '수정':
                //수정 페이지로 이동
                navigate(`/post/edit/${post_id}`);
                break;
            case '신고하기':
                //신고 모달 띄우기
                propFunc(true);
                break;
            case '웹사이트에서 상품보기':
                window.open(link, '_blank');
                console.log(link);
                break;
            case '상품 수정':
                navigate(`/edit/product/${post_id}`);
                break;
            default:
                console.log('error: value를 다시 확인해주세요.');
        }
    };
    return (
        <ul>
            {values.map((value, i) => {
                return (
                    <Li key={i}>
                        <Button
                            onClick={() => {
                                setButton(value, navigate, propFunc);
                            }}
                        >
                            {value}
                        </Button>
                    </Li>
                );
            })}
        </ul>
    );
}

const Li = styled.li`
    padding: 14px 26px 14px 26px;
    font-size: 1.4rem;
    font-weight: bold;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    font-weight: bold;
    text-align: left;
    &:hover {
        cursor: pointer;
    }
`;

export default PostModal;
