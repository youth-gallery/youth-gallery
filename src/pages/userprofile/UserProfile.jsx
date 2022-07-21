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
import DeleteAlert from '../../components/modal/DeleteAlert';
import PostModal from '../../components/modal/PostModal';
import Modal from '../../components/modal/Modal';

function UserProfile() {
    const [profileData, setProfileData] = useState({});
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjNTJiODJmZGNjNzEyZjQzODgyOSIsImV4cCI6MTY2MjcxMjQ1MSwiaWF0IjoxNjU3NTI4NDUxfQ.bnhQqSrauikpfrLKP6OXl2HMdizZdeM1TclnNTr1OXk';

    // 사용자프로필
    useEffect(() => {
        axios
            .get('https://mandarin.api.weniv.co.kr/profile/0002', {
                headers: {
                    'Authorization': `Bearer ${token}`,
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
            .get('https://mandarin.api.weniv.co.kr/product/0002', {
                headers: {
                    'Authorization': `Bearer ${token}`,
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
            .get('https://mandarin.api.weniv.co.kr/post/0002/userpost', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            })
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
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const openModal = (propState) => {
        console.log(propState);
        setShowModal(propState);
        console.log(showLogoutModal);
    };

    const closeModal = () => {
        console.log(false);
        setShowModal(false);
        setShowLogoutModal(false);
    };

    const openLogoutModal = (propState) => {
        setShowLogoutModal(propState);
        console.log(showLogoutModal);
    };

    //로그아웃
    const logout = () => {
        //로그인 구현시 수정
        console.log('로그아웃');
    };
    return (
        <>
            <Nav>
                <TopBasicNav
                    title={'youth-gallery 홈'}
                    openModalProp={openModal}
                />
            </Nav>
            <div className={styles.user_profile_wrap}>
                <Profile profileData={profileData} />
                <section className={styles.product_section}>
                    <h2 className={styles.title}>판매 중인 상품</h2>
                    <ul className={styles.item_warp}>
                        {productList.map((_, i) => {
                            // eslint-disable-next-line react/jsx-key
                            return <Product productList={productList} i={i} />;
                        })}
                    </ul>
                </section>
                <section className={styles.post_section}>
                    <h2 className={styles.ir}>작성한 게시글</h2>
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
                </section>
            </div>
            {showModal ? (
                <>
                    <div
                        className={styles.backgroundModal}
                        onClick={closeModal}
                    />
                    <Modal>
                        <PostModal
                            values={['설정 및 개인정보', '로그아웃']}
                            propFunc={['', openLogoutModal]}
                        />
                    </Modal>
                    {showLogoutModal ? (
                        <DeleteAlert
                            title={'로그아웃 하시겠어요? '}
                            rightText={'로그아웃'}
                            closeModalPropFunc={closeModal}
                            rightBtnPropFunc={logout}
                        />
                    ) : null}
                </>
            ) : null}
            <TabMenu img={'profileImg'} />
        </>
    );
}

export default UserProfile;
