import React, { useRef, useState, useEffect } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import TopUploadNav from '../../components/nav/TopUploadNav';
import Nav from '../../components/nav/Nav';
import styles from './PostUploadForm.module.css';
import axios from 'axios';

const PostUploadForm = () => {
    const inpRef = useRef();
    const onPicBtnClick = () => {
        inpRef.current.click();
    };
    const [state, setState] = useState(false);

    const [txt, setTxt] = useState('');
    const handleTxt = (event) => {
        setTxt(event.target.value);
    };

    const MAX_UPLOAD = 3;
    const [showImages, setShowImages] = useState([]);
    const handleAddImages = (event) => {
        const imageFiles = event.target.files;
        let imageUrlLists = [...showImages];
        for (let i = 0; i < imageFiles.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageFiles[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > MAX_UPLOAD) {
            imageUrlLists = imageUrlLists.slice(0, 3);
            alert('이미지 업로드는 3개까지만 가능합니다.');
        }
        setShowImages(imageUrlLists);
    };

    const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
    };

    useEffect(() => {
        if (txt.length > 0 || showImages.length > 0) {
            setState(true);
        } else {
            setState(false);
        }
    }, [txt, showImages]);

    // 임시로 token과 사용자를 설정하였습니다. 로그인 기능 완성후 수정 예정

    const createPost = async (e) => {
        e.preventDefault();
        const url = 'https://mandarin.api.weniv.co.kr';
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2FkNjA3ODJmZGNjNzEyZjQzN2QyZCIsImV4cCI6MTY2MjcxMDYxOCwiaWF0IjoxNjU3NTI2NjE4fQ.w47m557FRqRQhF8PGM_VUxF10mFtDexYJIxqUasFQ7I';
        localStorage.setItem('token', token);
        const getToken = localStorage.getItem('token');
        console.log(getToken);

        try {
            await axios.post(
                `${url}/post`,
                {
                    post: {
                        content: `${txt}`,
                        image: `${showImages.join(',')}`,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
        // 나중에 useNavigate() 추가하여 프로필 경로로 이동
        // navigate('');
    };

    return (
        <>
            <PostForm onSubmit={createPost}>
                <Nav>
                    <TopUploadNav title="업로드" state={state} />
                </Nav>
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
                    {showImages.map((image, id) => (
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
            </PostForm>
        </>
    );
};

export default PostUploadForm;
