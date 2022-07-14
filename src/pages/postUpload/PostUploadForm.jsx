import React, { useRef } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import styles from './PostUploadForm.module.css';

const PostUploadForm = () => {
    const inpRef = useRef();
    const onPicBtnClick = () => {
        inpRef.current.click();
    };

    return (
        <PostForm>
            <textarea
                className={styles.uploadform_txt}
                placeholder="게시글 입력하기..."
            />
            <button
                type="button"
                className={styles.uploadform_picture_btn}
                onClick={onPicBtnClick}
            />
            <input
                type="file"
                accept="image/*"
                ref={inpRef}
                className={styles.uploadform_picture_inp}
            />
        </PostForm>
    );
};

export default PostUploadForm;
