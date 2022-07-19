import React from 'react';
import LoginModal from './LoginModal';
import styles from './Modal.module.css';
import PostModal from './PostModal';

function Modal({ values }) {
    return (
        <section className={styles.modal_page}>
            <h2 className="ir">모달창</h2>
            <ul className={styles.modal_lists} values={values}>
                {values[0] === 'login' ? (
                    <LoginModal />
                ) : (
                    <PostModal values={values} />
                )}
            </ul>
        </section>
    );
}

export default Modal;
