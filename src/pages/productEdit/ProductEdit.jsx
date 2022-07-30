import axios from 'axios';
import { React, useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import TopUploadNav from '../../components/nav/TopUploadNav';
import styles from '../addProduct/AddProduct.module.css';

function ProductEdit() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [link, setLink] = useState('');
    const [state, setState] = useState(false);
    const navigate = useNavigate();
    const { product_id } = useParams();
    const inpRef = useRef(null);
    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    // 현재 인라인으로 바꾸는 방법 밖에 생각나지 않아 인라인으로 구현.
    //  혹시 다른 방법 생각난다면 수정 예정.
    const backgroundstyle = {
        backgroundImage: `url(${image})`,
    };

    // 버튼 활성화
    useEffect(() => {
        if (
            name.length > 0 &&
            price.length > 0 &&
            link.length > 0 &&
            price !== Number
        ) {
            setState(true);
        } else {
            setState(false);
        }
    }, [name, price, link]);

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
    const [previewClick, setPreviewClick] = useState(false);
    // 미리보기 이미지
    const handleImageInput = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setPreviewClick(true);
    };

    // 상품 등록 데이터 받아오기
    useEffect(() => {
        getProduct(product_id);
    }, [product_id]);

    const getProduct = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        try {
            const res = await axios.get(`${url}/product/detail/${product_id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            setName(res.data.product.itemName);
            setPrice(inputPriceFormat(res.data.product.price));
            setLink(res.data.product.link);
            setImage(res.data.product.itemImage);
        } catch (error) {
            console.log(error);
        }
    };

    const editProduct = async (e) => {
        e.preventDefault();
        if (state) {
            // 추후에 로그인 기능 구현되면 삭제. 일회성 토큰
            const url = 'https://mandarin.api.weniv.co.kr';
            const getToken = localStorage.getItem('token');
            const res = uploadImage();
            if (previewClick === true) {
                try {
                    await axios.put(
                        `${url}/product/${product_id}`,
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
                    console.log(res);
                    navigate(`/myprofile`);
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    await axios.put(
                        `${url}/product/${product_id}`,
                        {
                            product: {
                                itemName: name,
                                price: parseInt(
                                    price
                                        .split(',')
                                        .reduce((curr, acc) => curr + acc, '')
                                ),
                                link: link,
                                itemImage: image,
                            },
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${getToken}`,
                                'Content-type': 'application/json',
                            },
                        }
                    );
                    console.log(res);
                    navigate(`/myprofile`);
                } catch (error) {
                    console.log(error);
                }
            }
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
        <form className={styles.add_product_section} onSubmit={editProduct}>
            <Nav>
                <TopUploadNav title="수정" state={state} />
            </Nav>
            <section className={styles.input_section}>
                <div className={styles.input_inner_section}>
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
                        value={name}
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
                        value={link}
                        placeholder="URL을 입력해 주세요."
                        onChange={(e) => {
                            setLink(e.target.value);
                        }}
                    />
                </div>
            </section>
        </form>
    );
}

export default ProductEdit;
