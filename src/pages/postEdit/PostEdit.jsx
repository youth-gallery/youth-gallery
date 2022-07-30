import React, { useRef, useState, useEffect } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import TopUploadNav from '../../components/nav/TopUploadNav';
import Nav from '../../components/nav/Nav';
import styles from './PostEdit.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostEdit = () => {
    const { post_id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [txt, setTxt] = useState('');
    const [showImgs, setShowImgs] = useState([]);
    const MAX_UPLOAD = 3;

    const inpRef = useRef();

    useEffect(() => {
        getPost(post_id);
    }, [post_id]);

    const getPost = async () => {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        // 임시 포스트 아이디

        try {
            const res = await axios.get(`${url}/post/${post_id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            setTxt(res.data.post.content);
            if (res.data.post.image) {
                const images = res.data.post.image.split(',');
                setShowImgs(images);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    const handleTxt = (event) => {
        setTxt(event.target.value);
    };

    const handleAddImages = async () => {
        let formData = new FormData();
        const imgFiles = inpRef.current.files;
        for (let i = 0; i < imgFiles.length; i++) {
            const file = imgFiles[i];
            formData.append('image', file);
            const res = await axios({
                method: 'post',
                url: 'https://mandarin.api.weniv.co.kr/image/uploadfiles',
                data: formData,
            });
            console.log(res);
            res.data.map((data) => {
                showImgs.push(
                    `https://mandarin.api.weniv.co.kr/${data.filename}`
                );
            });
        }

        let imgArr = [...showImgs];

        if (imgArr.length > MAX_UPLOAD) {
            alert('이미지 업로드는 3개까지만 가능합니다.');
        }
        console.log(imgArr);
        setShowImgs(imgArr);
    };

    const handleDeleteImage = (id) => {
        setShowImgs(showImgs.filter((_, index) => index !== id));
    };

    useEffect(() => {
        if (txt.length > 0 || showImgs.length > 0) {
            setState(true);
        } else {
            setState(false);
        }
    }, [txt, showImgs]);

    // 임시로 token과 사용자를 설정하였습니다. 로그인 기능 완성후 수정 예정

    const createPost = async (e) => {
        e.preventDefault();

        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        console.log(getToken);
        const res = showImgs.join();
        try {
            await axios.put(
                `${url}/post/${post_id}`,
                {
                    post: {
                        content: `${txt}`,
                        image: res,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <PostForm onSubmit={createPost}>
                <Nav>
                    <TopUploadNav title="업로드" state={state} />
                </Nav>
                <section className={styles.outer_section}>
                    <div className={styles.inner_section}>
                        <textarea
                            className={styles.uploadform_txt}
                            placeholder="게시글 입력하기..."
                            value={txt}
                            onChange={handleTxt}
                        />
                        <div className={styles.uploadform_picture}>
                            <button
                                type="button"
                                className={styles.uploadform_picture_btn}
                                onClick={onPicBtnClick}
                            />
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                ref={inpRef}
                                onChange={handleAddImages}
                                className={styles.uploadform_picture_inp}
                            />
                        </div>
                        <div className={styles.preview_pics}>
                            {showImgs.map((image, id) => (
                                <div key={id} className={styles.preview_div}>
                                    <img
                                        src={image}
                                        alt={`${image}-${id}`}
                                        className={styles.preview_pic}
                                    />
                                    <button
                                        type="button"
                                        className={styles.preview_xbtn}
                                        onClick={() => handleDeleteImage(id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </PostForm>
        </>
    );
};

export default PostEdit;
