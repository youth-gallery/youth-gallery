import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopUploadNav from '../../components/nav/TopUploadNav';
import styles from './AddProduct.module.css';

function AddProduct() {
    return (
        <form className={styles.add_product_section} action="post">
            <BrowserRouter>
                <TopUploadNav />
            </BrowserRouter>
            <section className={styles.input_section}>
                <h2 className={styles.add_image_title}>이미지 등록</h2>
                <section className={styles.upload_img_section}>
                    <h3 className={styles.ir}>
                        업로드할 이미지가 보이는 곳 입니다.
                    </h3>
                    <button
                        className={styles.image_upload_button}
                        type="button"
                    ></button>
                </section>
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
                    type="number"
                    placeholder="숫자만 입력 가능합니다."
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
                />
            </section>
        </form>
    );
}

export default AddProduct;
