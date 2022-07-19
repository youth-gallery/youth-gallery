import React from 'react';
import styles from './PostModal.module.css';
import { useNavigate } from 'react-router-dom';

function PostModal({ values }) {
    const navigate = useNavigate();

    const setButton = (value, navigate) => {
        switch (value) {
            case '삭제':
                //삭제 모달 띄우기
                break;
            case '수정':
                //수정 페이지로 이동
                navigate('/edit');
                break;
            case '신고하기':
                //신고 모달 띄우기
                break;
            case '웹사이트에서 상품보기':
                //웹사이트 상품 페이지로 이동
                navigate('/');
                break;
            default:
                console.log('error: value를 다시 확인해주세요.');
        }
    };
    return (
        <ul className={styles.modal_lists}>
            {values.map((value, i) => {
                return (
                    <li className={styles.modal_list} key={i}>
                        <button
                            className={styles.modal_listBtn}
                            onClick={() => {
                                setButton(value, navigate);
                            }}
                        >
                            {value}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default PostModal;
