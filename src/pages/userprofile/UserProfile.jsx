import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './UserProfile.module.css';
import TopBasicNav from '../../components/nav/TopBasicNav';
import Profile from '../../components/Profile';
import Product from '../../components/Product';
import UserPost from '../../components/UserPost';
import TabMenu from '../../components/tab/TabMenu';
import Nav from '../../components/nav/Nav';
import ButtonModalActive from '../../components/modal/ButtonModalActive';

function UserProfile() {
    const [profileData, setProfileData] = useState({});
    const getToken = localStorage.getItem('token');
    const getAccountName = localStorage.getItem('accountname');

    // 사용자프로필
    useEffect(() => {
        axios
            .get(`https://mandarin.api.weniv.co.kr/profile/${getAccountName}`, {
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                setProfileData(res.data.profile);
            })
            .then((error) => {
                console.log(error);
            });
    }, {});

    // 상품리스트
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios
            .get(`https://mandarin.api.weniv.co.kr/product/${getAccountName}`, {
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                setProductList(res.data.product);
            })
            .then((error) => {
                console.log(error);
            });
    }, []);

    // 게시글 목록
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://mandarin.api.weniv.co.kr/post/${getAccountName}/userpost`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                setPostList(res.data.post);
            })
            .then((error) => {
                console.log(error);
            });
    }, []);
    console.log(postList);

    //모달 동작
    const [showModal, setShowModal] = useState(false);
    const openModal = (propState) => {
        console.log(propState);
        setShowModal(propState);
    };

    const closeModal = (props) => {
        setShowModal(props);
    };

    const logout = () => {
        console.log('로그아웃');
    };

    // 리스트형 앨범형 전환 버튼
    const [listBtn, setListBtn] = useState(true);
    const [albumBtn, setAlbumBtn] = useState(false);
    const handleListBtn = () => {
        setListBtn(true);
        setAlbumBtn(false);
    };

    const handleAlbumBtn = () => {
        setListBtn(false);
        setAlbumBtn(true);
        console.log(albumBtn);
    };

    return (
        <section className={styles.user_profile_section}>
            <Nav>
                <TopBasicNav
                    title={'youth-gallery 홈'}
                    openModalProp={openModal}
                />
            </Nav>
            <div className={styles.user_profile_wrap}>
                <Profile profileData={profileData} />
                <section className={styles.product_section}>
                    <div className={styles.product_list_warp}>
                        <h2 className={styles.title}>판매 중인 상품</h2>
                        <ul className={styles.item_warp}>
                            {productList.map((_, i) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Product productList={productList} i={i} />
                                );
                            })}
                        </ul>
                    </div>
                </section>
                <section className={styles.post_section}>
                    <ul className={styles.post_shape_button_warp}>
                        <li>
                            <button
                                className={
                                    listBtn === false
                                        ? `${styles.list_button} ${styles.off}`
                                        : styles.list_button
                                }
                                onClick={handleListBtn}
                            ></button>
                        </li>
                        <li>
                            <button
                                className={
                                    albumBtn === true
                                        ? `${styles.album_button} ${styles.on}`
                                        : styles.album_button
                                }
                                onClick={handleAlbumBtn}
                            ></button>
                        </li>
                    </ul>
                    <h2 className={styles.ir}>작성한 게시글</h2>{' '}
                    {listBtn === true ? (
                        <ul className={styles.post_warp}>
                            {postList.map((_, i) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <UserPost
                                        postList={postList}
                                        i={i}
                                        profileData={profileData}
                                    />
                                );
                            })}
                        </ul>
                    ) : (
                        <ul className={styles.post_album_warp}>
                            {postList.map((_, i) => {
                                return postList[i].image === null ? null : (
                                    <img
                                        src={postList[i].image}
                                        className={styles.post_album_item}
                                    />
                                );
                            })}
                        </ul>
                    )}
                </section>
            </div>
            <ButtonModalActive
                propState={showModal}
                propsCloseFunc={closeModal}
                postModalValues={{
                    values: ['설정 및 개인정보', '로그아웃'],
                    type: 'logout',
                }}
                innerAlertValues={{
                    title: '로그아웃 하시겠어요? ',
                    rightText: '로그아웃',
                    rightBtnPropFunc: logout,
                }}
            />
            <TabMenu img={'profileImg'} />
        </section>
    );
}

export default UserProfile;
