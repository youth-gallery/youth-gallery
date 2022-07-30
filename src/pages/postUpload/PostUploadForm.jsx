import React, { useRef, useState, useEffect } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import TopUploadNav from '../../components/nav/TopUploadNav';
import Nav from '../../components/nav/Nav';
import styles from './PostUploadForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostUploadForm = () => {
    let imgUrlLists = [];
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [txt, setTxt] = useState('');
    const [showImgs, setShowImgs] = useState([]);
    const MAX_UPLOAD = 3;

    const inpRef = useRef();
    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    const handleTxt = (event) => {
        setTxt(event.target.value);
    };

    const uploadImg = async () => {
        let formData = new FormData();
        const imgFiles = inpRef.current.files;
        for (let i = 0; i < imgFiles.length; i++) {
            const file = imgFiles[i];
            formData.append('image', file);
        }
        const res = await axios({
            method: 'post',
            url: 'https://mandarin.api.weniv.co.kr/image/uploadfiles',
            data: formData,
        });

        console.log(res.data);
        const imgUrls = res.data
            .map((file) => 'https://mandarin.api.weniv.co.kr/' + file.filename)
            .join();
        console.log(imgUrls);
        return imgUrls;
    };

    const handleAddImages = (event) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            imgUrlLists.push(...filesArray);
            setShowImgs((prevImgs) => prevImgs.concat(filesArray));
        }
        console.log(imgUrlLists);
        const imgFiles = inpRef.current.files;
        if (imgFiles.length > MAX_UPLOAD) {
            alert('이미지 업로드는 3개까지만 가능합니다.');
            imgUrlLists = imgUrlLists.slice(0, 3);
            setShowImgs(imgUrlLists);
        }
        Array.from(event.target.files).map((file) => URL.revokeObjectURL(file));
    };
    console.log(showImgs);

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

    const createPost = async (e) => {
        e.preventDefault();

        const url = 'https://mandarin.api.weniv.co.kr';

        const getToken = localStorage.getItem('token');
        console.log(getToken);
        const res = uploadImg();
        try {
            await axios.post(
                `${url}/post`,
                {
                    post: {
                        content: `${txt}`,
                        image: await res,
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
                <div className={styles.contents_section}>
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
            </PostForm>
        </>
    );
};

export default PostUploadForm;
