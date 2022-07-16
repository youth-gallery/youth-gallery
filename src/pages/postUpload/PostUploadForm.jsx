import React, { useRef, useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import styles from './PostUploadForm.module.css';
// import xbtn from '../../assets/x.png';

const PostUploadForm = () => {
    const inpRef = useRef();
    const onPicBtnClick = () => {
        inpRef.current.click();
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

    return (
        <>
            <PostForm>
                <textarea
                    className={styles.uploadform_txt}
                    placeholder="게시글 입력하기..."
                />
            </PostForm>
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
        </>
    );
};

export default PostUploadForm;
