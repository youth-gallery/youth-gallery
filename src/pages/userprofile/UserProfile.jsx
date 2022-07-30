import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './UserProfile.module.css';
import TopBasicNav from '../../components/nav/TopBasicNav';
import UserInfo from '../../components/UserInfo';
import Product from '../../components/Product';
import UserPost from '../../components/UserPost';
import TabMenu from '../../components/tab/TabMenu';
import Nav from '../../components/nav/Nav';
import ButtonModalActive from '../../components/modal/ButtonModalActive';
import { useNavigate, useParams } from 'react-router-dom';

function UserProfile() {
    const navigate = useNavigate();

    const getToken = localStorage.getItem('token');
    const getAccountName = localStorage.getItem('accountname');
    const { accountname } = useParams();
    const [profileData, setProfileData] = useState([]);
    const [productList, setProductList] = useState([]);
    const [postList, setPostList] = useState([]);
    const [followState, setFollowState] = useState(Boolean);
    const { myprofile } = useParams();
    useEffect(() => {
        // 사용자프로필
        axios
            .get(
                `https://mandarin.api.weniv.co.kr/profile/${
                    accountname ? accountname : getAccountName
                }`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                const profile = res.data.profile;
                setProfileData(profile);
                setFollowState(profile.isfollow);
            })
            .then((error) => {
                console.log(error);
            });
        // 상품리스트

        axios
            .get(
                `https://mandarin.api.weniv.co.kr/product/${
                    accountname ? accountname : getAccountName
                }`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            )
            .then((res) => {
                setProductList(res.data.product);
            })
            .then((error) => {
                console.log(error);
            });
        // 게시글 목록
        axios
            .get(
                `https://mandarin.api.weniv.co.kr/post/${
                    accountname ? accountname : getAccountName
                }/userpost`,
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

        console.log(postList);
    }, []);

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
        // 현재 가지고 있는(사용자이름 포함) 로컬스토리지 안의 모든 데이터 삭제해줌 (clear)
        localStorage.clear();

        // 로그아웃 후 / 화면으로 이동
        navigate('/');
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
                <TopBasicNav openModalProp={openModal} />
            </Nav>
            <div className={styles.user_profile_wrap}>
                <UserInfo profileData={profileData} followState={followState} />
                <section className={styles.product_section}>
                    <div className={styles.product_list_warp}>
                        <h2 className={styles.title}>판매 중인 상품</h2>
                        <ul className={styles.item_warp}>
                            {productList.map((_, i) => {
                                return (
                                    <Product
                                        productList={productList}
                                        i={i}
                                        key={productList[i].id}
                                    />
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
                                    <UserPost
                                        postList={postList}
                                        i={i}
                                        profileData={profileData}
                                        key={postList[i].id}
                                    />
                                );
                            })}
                        </ul>
                    ) : (
                        <ul className={styles.post_album_warp}>
                            {postList.map((_, i) => {
                                return postList[i].image === '' ? null : (
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
            {myprofile ? (
                <TabMenu img={'profileImg'} />
            ) : (
                <TabMenu img={'homeImg'} />
            )}
        </section>
    );
}

export default UserProfile;
