import React from 'react';
import styles from './Modal.module.css';


function Modal({ values, children }) {
    return (
        <section className={styles.modal_page}>
            <h2 className="ir">모달창</h2>
            <ul className={styles.modal_lists} values={values}>
                {children}
            </ul>
        </section>
    );
}

export default Modal;
