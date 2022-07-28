import axios from 'axios';
import { React, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import TopUploadNav from '../../components/nav/TopUploadNav';
import styles from './AddProduct.module.css';

const AddProduct = () => {
    const [preview, setPreview] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [link, setLink] = useState('');
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const inpRef = useRef(null);
    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    // 현재 인라인으로 바꾸는 방법 밖에 생각나지 않아 인라인으로 구현.
    //  혹시 다른 방법 생각난다면 수정 예정.
    const backgroundstyle = {
        backgroundImage: `url('${preview}')`,
    };

    // 버튼 활성화
    useEffect(() => {
        if (
            name.length > 0 &&
            price.length > 0 &&
            preview.length > 0 &&
            link.length > 0 &&
            price !== Number
        ) {
            setState(true);
        } else {
            setState(false);
        }
    }, [name, price, preview, link]);

    // 이미지 데이터 보내기
    const uploadImage = async () => {
        let formData = new FormData();
        const imgFile = inpRef.current.files;
        const file = imgFile[0];
        formData.append('image', file);
        const res = await axios.post(
            'https://mandarin.api.weniv.co.kr/image/uploadfile',
            formData
        );
        const imgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
        return imgUrl;
    };

    // 미리보기 이미지
    const handleImageInput = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    // 상품등록 데이터 전송
    const createProduct = async (e) => {
        e.preventDefault();
        const getAccountName = localStorage.getItem('accountname');
        // 추후에 로그인 기능 구현되면 삭제. 일회성 토큰
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        const res = uploadImage();
        try {
            await axios.post(
                `${url}/product`,
                {
                    product: {
                        itemName: name,
                        price: parseInt(
                            price
                                .split(',')
                                .reduce((curr, acc) => curr + acc, '')
                        ),
                        link: link,
                        itemImage: await res,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            navigate(`/profile/${getAccountName}`);
        } catch (error) {
            console.log(error);
        }
    };
    // 숫자에 , 찍어주는 함수
    const inputPriceFormat = (str) => {
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };
        const uncomma = (str) => {
            str = String(str);
            return str.replace(/[^\d]+/g, '');
        };
        return comma(uncomma(str));
    };

    return (
        <form className={styles.add_product_section} onSubmit={createProduct}>
            <Nav>
                <TopUploadNav title="저장" state={state} />
            </Nav>
            <section className={styles.input_section}>
                <h2 className={styles.add_image_title}>이미지 등록</h2>
                {
                    <section
                        className={styles.upload_img_section}
                        style={backgroundstyle}
                    >
                        <h3 className={styles.ir}>
                            업로드할 이미지가 보이는 곳 입니다.
                        </h3>
                        <label
                            className={styles.image_upload_button}
                            htmlFor={styles.image_upload_input}
                        ></label>
                        <input
                            id={styles.image_upload_input}
                            type="file"
                            accept="image/*"
                            ref={inpRef}
                            onChange={handleImageInput}
                            onClick={onPicBtnClick}
                        ></input>
                    </section>
                }
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_name_input}
                >
                    상품명
                </label>
                <input
                    id={styles.product_name_input}
                    className={styles.product_input}
                    type="text"
                    placeholder="2~15자 이내여야 합니다."
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_price_input}
                >
                    가격
                </label>
                <input
                    id={styles.product_price_input}
                    className={styles.product_input}
                    type="text"
                    value={price}
                    placeholder="숫자만 입력 가능합니다."
                    onChange={(e) => {
                        setPrice(inputPriceFormat(e.target.value));
                    }}
                />
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_link_input}
                >
                    판매링크
                </label>
                <input
                    id={styles.product_link_input}
                    className={styles.product_input}
                    type="text"
                    placeholder="URL을 입력해 주세요."
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                />
            </section>
        </form>
    );
};

export default AddProduct;
